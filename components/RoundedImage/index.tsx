import Image from "next/image";
import Styles from "./Styles.module.scss";
interface ImageProps {
  src: string;
}
export default function RoundedImage(props: ImageProps) {
  return (
    <div className={Styles.rounded_image_container}>
      <Image
        src={props.src}
        width={420}
        height={490}
        alt=""
        className={Styles.rounded_image}
      />
    </div>
  );
}
