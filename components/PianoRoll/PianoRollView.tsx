import React, { useRef, useState, useEffect } from "react";
import s from "./PianoRoll.module.scss";
import { createPianoRoll } from "@/components/pianoroll";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface PianoRollViewProps {
  data?: any;
  rollId?: number;
}

const PianoRollView: React.FC<PianoRollViewProps> = ({ data, rollId = 0 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [highlightingRect, setHighlightedRect] =
    useState<SVGRectElement | null>(null);
  const startXRef = useRef<number | null>(null);
  const endXRef = useRef<number | null>(null);
  const noteCounterRef = useRef<number>();

  useEffect(() => {
    if (!data?.length) return;

    const svgElement = svgRef.current;
    if (!svgElement) return;

    const convertScreenToSvgX = (x: number) => {
      const svgPoint = svgElement.createSVGPoint();
      svgPoint.x = x;
      const pointToSvg = svgPoint.matrixTransform(
        svgElement.getScreenCTM()?.inverse()
      );
      return pointToSvg.x;
    };
    const createHighlightingRect = (x: number) => {
      const newHighlightedRect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      newHighlightedRect.setAttribute("y", "0");
      newHighlightedRect.setAttribute("height", "1");
      newHighlightedRect.setAttribute("fill", "orange");
      newHighlightedRect.setAttribute("opacity", "0.5");

      svgRef.current?.appendChild(newHighlightedRect);
      setHighlightedRect(newHighlightedRect);
    };

    const handleMouseDown = (event: MouseEvent) => {
      removeHighlighting();
      startXRef.current = convertScreenToSvgX(event.clientX);
      createHighlightingRect(startXRef.current);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (startXRef.current === null) return;
      const currentX = convertScreenToSvgX(event.clientX);
      endXRef.current = currentX;
      const startX = startXRef.current;
      const x = Math.min(currentX, startX);
      const width = Math.abs(currentX - startX);

      highlightingRect?.setAttribute("x", String(x));
      highlightingRect?.setAttribute("width", String(width));
    };

    const handleMouseUp = (event: MouseEvent) => {
      if (startXRef.current === null || endXRef.current === null) return;

      const leftX = Math.min(startXRef.current, endXRef.current);
      const rightX = Math.max(startXRef.current, endXRef.current);

      const noteRects = svgElement.querySelectorAll("rect.note-rectangle");
      let newNoteCounter = 0;

      for (let i = 0; i < noteRects.length; i++) {
        const rectXStr = noteRects[i]?.getAttribute("x");
        const rectX = parseFloat(rectXStr ? rectXStr : "");
        const rectWidthStr = noteRects[i]?.getAttribute("width");
        const rectWidth = parseFloat(rectWidthStr ? rectWidthStr : "");

        if ((rectX >= leftX || rectX + rectWidth >= leftX) && rectX <= rightX) {
          noteRects[i].setAttribute("fill", "purple");
          newNoteCounter++;
        }
      }

      noteCounterRef.current = newNoteCounter;
      logInfo();

      startXRef.current = null;
      endXRef.current = null;
    };
    const handleMouseLeave = (event: MouseEvent) => {
      if (startXRef.current !== null) {
        handleMouseUp(event);
        startXRef.current = null;
      }
    };
    const removeHighlighting = () => {
      if (highlightingRect) {
        svgElement.removeChild(highlightingRect);
        setHighlightedRect(null);
      }
      noteCounterRef.current = 0;
      const noteRects = svgElement.querySelectorAll("rect.note-rectangle");
      for (let i = 0; i < noteRects.length; i++) {
        noteRects[i].setAttribute("fill", "black");
      }
    };

    svgElement.addEventListener("mousedown", handleMouseDown);
    svgElement.addEventListener("mousemove", handleMouseMove);
    svgElement.addEventListener("mouseup", handleMouseUp);
    svgElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svgElement.removeEventListener("mousedown", handleMouseDown);
      svgElement.removeEventListener("mousemove", handleMouseMove);
      svgElement.removeEventListener("mouseup", handleMouseUp);
      svgElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [highlightingRect]);

  useEffect(() => {
    createPianoRoll(data, rollId, svgRef.current);
  }, []);

  const logInfo = () => {
    console.log(`Start point: ${startXRef.current}`);
    console.log(`End point: ${endXRef.current}`);
    console.log(`Number of highlighted notes: ${noteCounterRef.current}`);
  };

  return (
    <>
      <div className={s.pianoRollView}>
        <SkeletonTheme
          baseColor="white"
          highlightColor="#afc8dc"
          borderRadius="1rem"
        >
          {data?.length ? (
            <svg className={s.pianoRollSvg} ref={svgRef} />
          ) : (
            <Skeleton height="100%" />
          )}
        </SkeletonTheme>
      </div>
    </>
  );
};

export default PianoRollView;
