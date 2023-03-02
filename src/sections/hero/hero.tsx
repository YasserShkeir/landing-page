import Button from "@/components/button/button";
import styles from "./hero.module.css";
import whatsappIcon from "@/assets/icons/whatsapp-icon.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroImages}>
          <Image
            src={require("@/assets/images/hero-left.png")}
            alt="Water Monster"
            height={400}
          />
          <Image
            src={require("@/assets/images/hero-right.png")}
            alt="Water Monster"
            height={350}
          />
        </div>
        <div className={styles.heroText}>
          <h1>Water Monitoring Made Easy</h1>
          <p>
            Reliable water supply with Water Monster's user-friendly monitoring
            system
          </p>
        </div>
        <Button
          text="Order Yours Now"
          leftIcon={whatsappIcon}
          isRounded={true}
        />
      </div>
    </section>
  );
}
