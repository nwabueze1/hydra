import { PropsWithChildren } from "react";
import Styles from "./Container.module.scss";
export default function Container(props: PropsWithChildren) {
  return <div className={Styles.container}>{props.children}</div>;
}
