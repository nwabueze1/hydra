import { PropsWithChildren } from "react";
import Styles from "./Styles.module.scss";
export default function List(props: PropsWithChildren) {
  return <ul className={Styles.list}>{props.children}</ul>;
}
