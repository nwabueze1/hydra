import { PropsWithChildren } from "react";
import Styles from "./Styles.module.scss";

export default function InlineForm(props: PropsWithChildren) {
  return <div className={Styles.inlineForm}>{props.children}</div>;
}
