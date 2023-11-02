"use client";
import React, { useEffect, useState } from "react";
import s from "./PianoRoll.module.scss";
import { loadPianoRollData } from "@/api/PianoRollData.js";
import PianoRollContainer from "./PianoRollContainer";

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
      <PianoRollContainer data={data} />
    </div>
  );
};

export default PianoRollDisplay;
