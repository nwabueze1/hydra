import Image from "next/image";
import Block from "../Block";
import Button from "../Button";
import TwoColumnGrid from "../TwoColumnGrid";
import Styles from "./About.module.scss";

export default function About() {
  return (
    <Block>
      <TwoColumnGrid>
        <Image
          src={"/images/boy.svg"}
          height={524}
          width={557}
          alt="boy"
          className={Styles.image}
        />
        <div style={{ maxWidth: 700 }}>
          <h4>About</h4>
          <h4 className="light" style={{ marginBottom: 30 }}>
            HYDRA VR
          </h4>
          <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <div style={{ marginTop: 25 }}>
            <Button type="contained">Let's get in touch</Button>
          </div>
        </div>
      </TwoColumnGrid>
    </Block>
  );
}
