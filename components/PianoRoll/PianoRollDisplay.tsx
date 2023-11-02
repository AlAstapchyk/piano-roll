"use client";
import React, { useEffect, useState } from "react";
import s from "./PianoRoll.module.scss";
import PianoRollCard from "./PianoRollCard";
import { loadPianoRollData } from "@/api/PianoRollData.js";

const CARDS_NUMBER = 33;

const PianoRollDisplay = () => {
  const [data, setData] = useState<any[]>();

  async function fetchData() {
    setData([]);
    const fetchedData = await loadPianoRollData();
    setData(fetchedData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const buttonOnClick = () => {
    fetchData();
  };

  return (
    <div className={s.pianoRollDisplay}>
      <button
        className={s.reload}
        onClick={() => {
          if (data?.length) buttonOnClick();
        }}
      >
        Reload Piano Rolls
      </button>
      <div className={s.pianoRollContainer}>
        {Array.from({ length: CARDS_NUMBER }, (_, i) => (
          <PianoRollCard data={data} rollId={i + 1} key={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default PianoRollDisplay;
