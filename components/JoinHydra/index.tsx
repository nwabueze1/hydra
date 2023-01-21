import Block from "../Block";
import Button from "../Button";
import InlineForm from "../input/InlineForm";
import TextArea from "../input/TextArea";
import TextBox from "../input/TextBox";
import Styles from "./Styles.module.scss";

export default function JoinHydra() {
  return (
    <Block>
      <div className={Styles.container}>
        <header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h4 style={{ textAlign: "center" }}>JOin hydra</h4>
          <div
            style={{
              width: "414px",
              height: "1px",
              backgroundColor: "white",
              margin: "2rem",
            }}
          ></div>
          <h4 className="light">let's build your vr experience</h4>
        </header>
        <form action="">
          <InlineForm>
            <TextBox type="text" placeholder="First Name" />
            <TextBox type="text" placeholder="last name" />
          </InlineForm>
          <InlineForm>
            <TextBox type="email" placeholder="Email" />
            <TextBox type="text" placeholder="phone number" />
          </InlineForm>
          <TextBox type="text" placeholder="subject" fullWidth />
          <TextArea rows={8} placeholder="Tell Us Something" fullWidth />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Button type="contained" submit>
              Send to hydra
            </Button>
          </div>
        </form>
      </div>
    </Block>
  );
}
