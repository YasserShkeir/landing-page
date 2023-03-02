import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer2.module.css";

const icons = [
  {
    name: "Twitter",
    icon: require("@/assets/icons/twitter-icon.svg"),
    link: "#",
  },
  {
    name: "YouTube",
    icon: require("@/assets/icons/youtube-icon.svg"),
    link: "#",
  },
  {
    name: "Instagram",
    icon: require("@/assets/icons/instagram-icon.svg"),
    link: "#",
  },
  {
    name: "Facebook",
    icon: require("@/assets/icons/facebook-icon.svg"),
    link: "#",
  },
];

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>2023 © Water Monster</p>
        <p>
          <Link href="/terms-of-service">Terms of Service</Link>
        </p>
      </div>
      <div className={styles.center}>
        <div className={styles.socialIcons}>
          {icons.map((icon) => (
            <a href={icon.link} key={icon.name}>
              <Image src={icon.icon} alt={icon.name} />
            </a>
          ))}
        </div>
      </div>
      {/* TODO: When right is clicked open select */}
      <div className={styles.right}>
        <select className={styles.select}>
          <option className={styles.option} value="en">
            English
          </option>
        </select>
      </div>
    </div>
  );
}
