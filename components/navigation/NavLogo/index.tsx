import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href={"/"}>
      <Image
        src={"/icons/logo.svg"}
        height={150}
        width={150}
        alt="logo image"
      />
    </Link>
  );
}
