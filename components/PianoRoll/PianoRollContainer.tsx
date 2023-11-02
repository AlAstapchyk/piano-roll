import React from "react";
import PianoRollCard from "./PianoRollCard";
import s from "./PianoRoll.module.scss";

interface PianoRollContainerProps {
  cardsNumber?: number;
  data?: any;
}
const PianoRollContainer = ({ cardsNumber = 33, data }: PianoRollContainerProps) => {
  return (
    <div className={s.pianoRollContainer}>
      {Array.from({ length: cardsNumber }, (_, i) => (
        <PianoRollCard data={data} rollId={i + 1} key={i + 1} />
      ))}
    </div>
  );
};

export default PianoRollContainer;
