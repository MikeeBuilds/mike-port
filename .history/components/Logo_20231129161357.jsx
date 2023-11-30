import Link from "next/link";
import Image from "next/image";


const Logo = () => {
  return (
    <Link>
        <Image src='/logo.svg' width={54} height={54}/>
    </Link>
  )
}

export default Logo