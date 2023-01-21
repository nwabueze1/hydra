import About from "@/components/About";
import Block from "@/components/Block";
import Button from "@/components/Button";
import Callout from "@/components/Callout";
import Container from "@/components/Container";
import HowWeBuild from "@/components/HowWeBuild";
import Introduction from "@/components/Introduction";
import JoinHydra from "@/components/JoinHydra";
import Navbar from "@/components/navigation/Navbar/Navbar";
import NavLink from "@/components/navigation/NavLink/NavLink";
import NavList from "@/components/navigation/NavList";
import RoundedImage from "@/components/RoundedImage";
import TechnologiesAndHardware from "@/components/TechnologiesAndHardware";
import TwoColumnGrid from "@/components/TwoColumnGrid";
import WhyBuildWithUs from "@/components/WhyBuildWithHydra";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hydra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar />
        <Block>
          <TwoColumnGrid>
            <div style={{ maxWidth: 560 }}>
              <h1>Dive into the depths of virtual reality</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                ratione itaque exercitationem ab? Iste, nulla sint inventore
                quae modi iure quidem amet facilis libero quod!
              </p>
              <div className="action">
                <Button type="contained">Build Your world</Button>
                <Image
                  src={"/icons/chevronLeft.svg"}
                  height={100}
                  width={100}
                  alt="Chevron"
                />
              </div>
            </div>
            <div style={{ maxWidth: 560 }}>
              <RoundedImage src="/images/girl.svg" />
            </div>
          </TwoColumnGrid>
        </Block>
        <Block>
          <Callout />
        </Block>
        {/* <Introduction /> */}
        <About />
        <WhyBuildWithUs />
        <TechnologiesAndHardware />
      </Container>
      <HowWeBuild />
      <Container>
        <JoinHydra></JoinHydra>
      </Container>
    </>
  );
}
