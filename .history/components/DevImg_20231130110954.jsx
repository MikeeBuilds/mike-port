import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return <div className={`${containerStyles}`}>
    <Image src={img} />
  </div>;
};

export default DevImg;
