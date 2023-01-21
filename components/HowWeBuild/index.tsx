import Image from "next/image";
import Block from "../Block";
import Container from "../Container";
import Introduction from "../Introduction";
import Styles from "./Styles.module.scss";

const Item = (props: { title: string; subTitle: string }) => (
  <article
    style={{
      maxWidth: 300,
    }}
  >
    <div className={Styles.ellipse_container}>
      <div className={Styles.inner_ellipse}>
        <h6>{props.title}</h6>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        src={"/icons/chevronLeft.svg"}
        height={100}
        width={100}
        alt="arrow"
      />
      <h6 className={Styles.heading}>{props.subTitle}</h6>
    </div>
  </article>
);
export default function HowWeBuild() {
  const count = [1, 2, 3, 4];
  const desc = [
    `3D Conception
  & Design`,
    `Interaction
  Design`,
    `VR World
  User Testing`,
    `Hydra VR
  Deploy`,
  ];
  return (
    <Block>
      <Container>
        <Introduction
          title="How we build"
          subtitle="with hydra vr?"
          description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
      </Container>
      <div className={Styles.container}>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {count.map((value) => (
              <Item
                key={value}
                title={value.toString()}
                subTitle={desc[value - 1]}
              />
            ))}
          </div>
        </Container>
      </div>
    </Block>
  );
}
