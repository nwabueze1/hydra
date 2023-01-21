import CalloutItem from "../CalloutItem/CalloutItem";
import Styles from "./Callout.module.scss";

export default function Callout() {
  return (
    <div className={Styles.callOut}>
      <CalloutItem
        icon="/images/location.svg"
        title="Pay Us a Visit"
        subTitle="Union St, Seattle, WA 98101, United States"
        withSaperator
      />
      <CalloutItem
        icon="/images/telephone.svg"
        title="Give Us a Call"
        subTitle="+234 903 2295 542"
        withSaperator
      />
      <CalloutItem
        icon="/images/mail.svg"
        title="Send Us a Message"
        subTitle="fidelis.okeke@andela.com"
      />
    </div>
  );
}
