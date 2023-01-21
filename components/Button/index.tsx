import { MouseEvent, ReactNode } from "react";
import Styles from "./Button.module.scss";

type buttonType = "contained" | "outline";
interface IButtonProps {
  children: ReactNode;
  type: buttonType;
  onClick?: (e: any) => void;
}

export default function Button(props: IButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`${Styles.button} ${
        props.type === "contained"
          ? Styles.button__contained
          : Styles.button__outlined
      }`}
    >
      {props.children}
    </button>
  );
}
