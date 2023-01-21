import Image from "next/image";
import Styles from "./Styles.module.scss";

interface ICallOutItem {
  icon: string;
  title: string;
  subTitle: string;
  withSaperator?: boolean;
}
export default function CalloutItem(props: ICallOutItem) {
  return (
    <article className={Styles.callout_container}>
      <Image src={props.icon} height={70} width={70} alt="images" />
      <div className={Styles.callout_item}>
        <h4 className={Styles.callout_heading}>{props.title}</h4>
        <p>{props.subTitle}</p>
      </div>
      {props.withSaperator && <div className={Styles.saperator}></div>}
    </article>
  );
}
