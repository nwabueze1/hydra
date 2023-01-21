import { ChangeEvent, ChangeEventHandler } from "react";
import Styles from "./Styles.module.scss";

type type = "text" | "email" | "number";

interface IInput {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  cols?: number;
  rows?: number;
  fullWidth?: boolean;
  name?: string;
}
export default function TextArea(props: IInput) {
  return (
    <textarea
      onChange={props.onChange}
      value={props.value}
      className={`${Styles.textbox} ${props.fullWidth ? Styles.fullWidth : ""}`}
      placeholder={props.placeholder}
      cols={props.cols}
      rows={props.rows}
      required
      name={props.name}
    />
  );
}
