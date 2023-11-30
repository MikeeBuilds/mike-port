import Link from "next/link";
import Image from "next/image";


const Logo = () => {
  return (
    <Link>
        <Image src='/logo.svg' width={4}/>
    </Link>
  )
}

export default Logo