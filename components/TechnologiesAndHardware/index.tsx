import Image from "next/image";
import Block from "../Block";
import Styles from "./Styles.module.scss";

export default function TechnologiesAndHardware() {
  const items = new Array(4).fill(0);
  return (
    <Block>
      <div className={Styles.container}>
        <h4>TECHNOLOGIES & HARDWARE</h4>
        <h4 className="light">USED BY HYDRA VR.</h4>
        <div className={Styles.chevron_container}>
          <div className={Styles.inner_container}>
            <Image src={"/images/chevron.svg"} height={50} width={50} alt="" />
          </div>
        </div>
      </div>
      <div className={Styles.logo_container}>
        {items.map((_x, index) => (
          <Image
            src={`/images/hydra${index !== 0 ? index + 1 : ""}.svg`}
            height={270}
            width={270}
            alt=""
          />
        ))}
      </div>
    </Block>
  );
}
