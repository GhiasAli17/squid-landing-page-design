import React from "react";

type ButtonProps = {
  text: string;
  className?: string;
  noGradient?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`text-white text-sm rounded-[5px] px-7 py-3 ${
        props.noGradient
          ? ""
          : " hover:bg-gradient-to-l bg-gradient-to-r from-gradient-start to-gradient-end  "
      } ${props.className ?? ""}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
