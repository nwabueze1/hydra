import { PropsWithChildren } from "react";
import Styles from "./Styles.module.scss";

export default function NavList(props: PropsWithChildren) {
  return <ul className={Styles.navList}>{props.children}</ul>;
}
