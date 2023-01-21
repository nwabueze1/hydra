import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href={"/"}>
      <Image src={"/icons/logo.webp"} height={70} width={70} alt="logo image" />
    </Link>
  );
}
