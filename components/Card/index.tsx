import Image from "next/image";
import Button from "../Button";
import Styles from "./Styles.module.scss";

interface ICardProps {
  image: string;
  title: string;
  description: string;
}
export default function Card(props: ICardProps) {
  return (
    <article className={Styles.card}>
      <div className={Styles.cardEllipse}>
        <Image
          src={props.image}
          height={190.2}
          width={190.2}
          alt="img"
          className={Styles.image}
        />
      </div>
      <h5>{props.title}</h5>
      <div className={Styles.divider}></div>
      <p>{props.description}</p>
      <Button type="contained">TRY it now</Button>
    </article>
  );
}
