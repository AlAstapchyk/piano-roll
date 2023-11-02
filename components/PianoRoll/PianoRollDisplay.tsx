"use client";
import React, { useEffect, useState } from "react";
import s from "./PianoRoll.module.scss";
import { loadPianoRollData } from "@/api/PianoRollData.js";
import PianoRollContainer from "./PianoRollContainer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setData } from "@/redux/dataSlice";

const PianoRollDisplay = () => {
  const data = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    dispatch(setData([]));
    loadPianoRollData().then((fetchedData) => {
      dispatch(setData(fetchedData));
    });
  }

  const buttonOnClick = () => {
    if (data?.length) fetchData();
  };

  return (
    <div className={s.pianoRollDisplay}>
      <button className={s.reload} onClick={buttonOnClick}>
        Reload Piano Rolls
      </button>
      <PianoRollContainer data={data} />
    </div>
  );
};

export default PianoRollDisplay;
