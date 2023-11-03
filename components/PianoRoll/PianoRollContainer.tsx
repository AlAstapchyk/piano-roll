import React from "react";
import PianoRollCard from "./PianoRollCard";
import s from "./PianoRoll.module.scss";

interface PianoRollContainerProps {
  cardsNumber?: number;
  data?: any;
  excludedId?: number;
}
const PianoRollContainer = ({
  cardsNumber = 33,
  data,
  excludedId,
}: PianoRollContainerProps) => {
  return (
    <div className={s.pianoRollContainer}>
      {Array.from({ length: cardsNumber }, (_, i) => {
        if (i !== excludedId)
          return <PianoRollCard data={data} rollId={i} key={i} />;
      })}
    </div>
  );
};

export default PianoRollContainer;
