import Image from "next/image";
import Block from "../Block";
import TwoColumnGrid from "../TwoColumnGrid";
import Styles from "./introduction.module.scss";

export default function Introduction() {
  return (
    <Block>
      <div className={Styles.introduction}>
        <div className={Styles.first_col}>
          <h4>INTRODUCTION</h4>
          <TwoColumnGrid>
            <h4 className="light" style={{ marginRight: 100 }}>
              TO HYDRA VR
            </h4>
            <Image src={"/images/Arrow.svg"} alt="" height={100} width={228} />
          </TwoColumnGrid>
        </div>
        <div style={{ maxWidth: "700px" }}>
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
    </Block>
  );
}
