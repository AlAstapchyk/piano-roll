"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { loadPianoRollData } from "@/api/PianoRollData";
import { useEffect, useState } from "react";
import s from "./page.module.scss";
import PianoRollView from "@/components/PianoRoll/PianoRollView";

const page = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await loadPianoRollData();
      setData(fetchedData);
    }

    fetchData();
  }, []);

  if (data?.length)
    return (
      <div className="page">
        <main className={s.main}>
          <PianoRollView data={data} />
        </main>
        <div className="rightContent"></div>
      </div>
    );
};

export default page;
