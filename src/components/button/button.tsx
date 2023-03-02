import React from "react";
import Image from "next/image";
import { colors } from "@/styles/colors";

type ButtonProps = {
  text: string;
  color?: string;
  backgroundColor?: string;
  leftIcon?: string;
  isRounded?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  color = colors.white,
  backgroundColor = colors.primary100,
  leftIcon,
  isRounded = false,
}) => {
  const buttonStyles: React.CSSProperties = {
    color,
    backgroundColor,

    borderRadius: isRounded ? "50px" : "5px",

    display: "flex",
    alignItems: "center",
    padding: "20px 35px",
    cursor: "pointer",

    fontSize: "23px",
    fontWeight: 700,

    border: "none",

    width: "fit-content",
  };

  return (
    <button style={buttonStyles}>
      {leftIcon && (
        <Image
          src={leftIcon}
          alt="left icon"
          height={30}
          width={30}
          style={{ marginRight: "20px" }}
        />
      )}
      {text}
    </button>
  );
};

export default Button;
