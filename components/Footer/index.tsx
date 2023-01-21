import Image from "next/image";
import React, { PropsWithChildren } from "react";
import Button from "../Button";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import Styles from "./Styles.module.scss";

const ImageContainer = (props: { src: string }) => (
  <Image
    src={props.src}
    width={37}
    height={37}
    alt=""
    style={{ marginRight: 5 }}
  />
);

export default function Footer(props: PropsWithChildren) {
  return (
    <footer>
      <section className={Styles.footer}>
        <Image
          src={"/images/footer_logo.svg"}
          height={187}
          width={197}
          alt=""
        />
        <List>
          <ListItem>about</ListItem>
          <ListItem>service</ListItem>
          <ListItem>technologies</ListItem>
          <ListItem>how to</ListItem>
          <ListItem>join hydra</ListItem>
        </List>
        <List>
          <ListItem>f.a.q</ListItem>
          <ListItem>site map</ListItem>
          <ListItem>conditions</ListItem>
          <ListItem>licenses</ListItem>
        </List>
        <div>
          <h6
            style={{ fontSize: "1.6rem", fontWeight: "bold", marginBottom: 20 }}
          >
            SOCIALIZE WITH HYDRA
          </h6>
          <div style={{ display: "flex", marginBottom: 20 }}>
            <ImageContainer src="/icons/facebook.svg" />
            <ImageContainer src="/icons/twitter.svg" />
            <ImageContainer src="/icons/linkedin.svg" />
            <ImageContainer src="/icons/instagram.svg" />
            <ImageContainer src="/icons/youtube.svg" />
            <ImageContainer src="/icons/pinterest.svg" />
          </div>
          <Button type="contained">Build your world</Button>
        </div>
      </section>
      
      <p className={Styles.footer_text}>
        {new Date().getFullYear()} © HYDRA LANDING PAGE - BY Fidelis Okeke - ALL
        RIGHTS RESERVED
      </p>
    </footer>
  );
}
