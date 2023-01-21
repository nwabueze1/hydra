import { PropsWithChildren, ReactPropTypes } from "react";
import Styles from "./Styles.module.scss";

export default function Block(props: PropsWithChildren) {
  return <section className={Styles.block}>{props.children}</section>;
}
