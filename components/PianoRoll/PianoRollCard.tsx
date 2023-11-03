"use client";

import Image from "next/image.js";
import { createPianoRoll } from "../pianoroll.js";
import s from "./PianoRoll.module.scss";
import rightArrowSvg from "../../public/assets/right-arrow.svg";
import Link from "next/link.js";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useRef } from "react";

interface PianoRollCardProps {
  rollId: number;
  data?: any;
}
const PianoRollCard = ({ rollId, data }: PianoRollCardProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (data.length) createPianoRoll(data, rollId, svgRef.current);
  }, [data, rollId]);

  return (
    <SkeletonTheme
      baseColor="white"
      highlightColor="#afc8dc"
      borderRadius="1rem"
    >
      {data.length ? (
        <div className={s.pianoRollCard} key={rollId}>
          <Link href={"/listen?id=" + rollId}>
            <svg className={s.pianoRollSvg} ref={svgRef} />

            <div className={s.description}>
              <p className={s.title}>
                This is a piano roll number {rollId + 1}
              </p>

              <Image
                className={s.rightArrow}
                src={rightArrowSvg}
                alt="Arrow to right"
                height={32}
              />
            </div>
          </Link>
        </div>
      ) : (
        <Skeleton height={240} />
      )}
    </SkeletonTheme>
  );
};

export default PianoRollCard;
