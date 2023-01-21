import Link from "next/link";
import { ReactNode } from "react";
import Styles from "./NavLink.module.scss";
interface INavLink {
  href: string;
  children: ReactNode;
}

export default function NavLink(props: INavLink) {
  return (
    <li className={`${Styles.navLink}`}>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}
