import Image from "next/image";
import Block from "../Block";
import TwoColumnGrid from "../TwoColumnGrid";
import Styles from "./introduction.module.scss";

interface IIntroduction {
  title: string;
  subtitle: string;
  description: string;
}
export default function Introduction(props:IIntroduction) {
  return (
    <Block>
      <div className={Styles.introduction}>
        <div className={Styles.first_col}>
          <h4>{props.title}</h4>
          <TwoColumnGrid>
            <h4 className="light" style={{ marginRight: 100 }}>
             {props.subtitle}
            </h4>
            <Image src={"/images/Arrow.svg"} alt="" height={100} width={228} />
          </TwoColumnGrid>
        </div>
        <div style={{ maxWidth: "700px" }}>
          <p>
           {props.description}
          </p>
        </div>
      </div>
    </Block>
  );
}
