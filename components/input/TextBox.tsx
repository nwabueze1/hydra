import { ChangeEvent } from "react";
import Styles from "./Styles.module.scss";

type type = "text" | "email" | "number";

interface IInput {
  type?: type;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  fullWidth?: boolean;
  name?: string;
}
export default function TextBox(props: IInput) {
  return (
    <input
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      className={`${Styles.textbox} ${props.fullWidth ? Styles.fullWidth : ""}`}
      placeholder={props.placeholder}
      required
      name={props.name}
    />
  );
}
