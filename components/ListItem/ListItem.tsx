import Link from "next/link";
import React, { PropsWithChildren } from "react";
import Styles from "./Styles.module.scss";
export default function ListItem(props: PropsWithChildren) {
  return (
    <li className={Styles.list_item}>
      <Link href={"/"}>{props.children}</Link>
    </li>
  );
}
