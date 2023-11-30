import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return <div className={`${containerStyles}`}>
    <Image src={imgSrc} />
  </div>;
};

export default DevImg;
