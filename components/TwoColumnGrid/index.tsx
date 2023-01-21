import { PropsWithChildren } from "react";
import Styles from "./Styles.module.scss";

export default function TwoColumnGrid(props: PropsWithChildren) {
  return <article className={Styles.box}>{props.children}</article>;
}
