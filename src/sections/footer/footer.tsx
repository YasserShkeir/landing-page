import React from "react";
import { colors } from "@/styles/colors";

// Components
import Footer2 from "@/sections/footer/footer-copyright/footer2";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: colors.black,
      }}
    >
      <Footer2 />
    </footer>
  );
}
