/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { loadPianoRollData } from "@/api/PianoRollData";
import { useEffect, useState } from "react";
import s from "./page.module.scss";
import { createPianoRoll } from "@/components/pianoroll";

const page = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await loadPianoRollData();
      setData(fetchedData);
    }

    fetchData();
  }, []);

  const PianoRollView = ({ rollId = 1 }) => {
    return (
      <div className={s.pianoRollView}>
        <svg
          className={s.pianoRollSvg}
          ref={(svg) => createPianoRoll(data, rollId, svg)}
        />
      </div>
    );
  };

  if (data?.length)
    return (
      <div className="page">
        <main>
          <PianoRollView />
        </main>
        <div className="rightContent"></div>
      </div>
    );
};

export default page;
