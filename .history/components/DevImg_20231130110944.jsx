import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return <div className={`${containerStyles}`}>
    <Image />
  </div>;
};

export default DevImg;
