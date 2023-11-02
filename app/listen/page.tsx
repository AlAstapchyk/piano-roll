"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import s from "./page.module.scss";
import PianoRollView from "@/components/PianoRoll/PianoRollView";
import PianoRollContainer from "@/components/PianoRoll/PianoRollContainer";
import { useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const page = () => {
  const data = useAppSelector((state) => state);
  const searchParams = useSearchParams();

  const [id, setId] = useState<number>();

  useEffect(() => {
    if (data.length) {
      const idStr = searchParams.get("id");
      setId(parseFloat(idStr ? idStr : ""));
    } else {
      redirect("/");
    }
  }, [searchParams]);

  if (data?.length)
    return (
      <div className={s.page + " page"}>
        <main className={s.main}>
          <PianoRollView data={data} rollId={id} />
        </main>
        <div className={s.rightContent}>
          <PianoRollContainer data={data} excludedId={id} />
        </div>
      </div>
    );
};

export default page;
