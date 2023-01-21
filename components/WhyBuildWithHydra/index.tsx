import Block from "../Block";
import Card from "../Card";
import Introduction from "../Introduction";

export default function WhyBuildWithUs() {
  const description = `Vitae sapien pellentesque habitant morbi
  nunc. Viverra aliquet  porttitor rhoncus 
  libero justo laoreet sit amet vitae.`;
  return (
    <Block>
      <Introduction
        title="why build"
        subtitle="with hydra"
        description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Card
          image="/images/card1.svg"
          title="SIMULATION"
          description={description}
        />
        <Card
          image="/images/card2.svg"
          title="EDUCATION"
          description={description}
        />
        <Card
          image="/images/card3.svg"
          title="SELF-CARE"
          description={description}
        />
        <Card
          image="/images/card4.svg"
          title="OUTDOOR"
          description={description}
        />
      </div>
    </Block>
  );
}
