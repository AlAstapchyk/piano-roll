import s from "./page.module.scss";
import PianoRollDisplay from "@/components/PianoRoll/PianoRollDisplay";

export default function Home() {
  return (
    <div className="page">
      <main className={s.main}>
        <PianoRollDisplay/>
      </main>
    </div>
  );
}
