import Image from "next/image";
import React from "react";
import s from "./Navbar.module.scss";
import whiteLogoSvg from "../../public/assets/white.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link href="/">
        <div className={s.logoContainer}>
          <Image src={whiteLogoSvg} alt="PianoRoll Logo" height={32} />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
