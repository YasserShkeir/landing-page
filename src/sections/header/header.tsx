import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "@/assets/logo/logo-blue.svg";
import Button from "@/components/button/button";
import dollarIcon from "@/assets/icons/dollar-sign.svg";

export default function Header() {
  // Create a header with the logo to the left, and a button to the right
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/">
            <Image src={logo} alt="Water Monster" height={76} />
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="/">
            <Button
              text="Invest in the project"
              leftIcon={dollarIcon}
              isRounded={true}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
