import Image from "next/image";

type CardProps = {
  title: string;
  content: string;
  height?: number;
  width?: number;
};

const Card = ({ title, content, height, width }: CardProps) => (
  <div className="w-full flex justify-center h-full rounded-xl backdrop-blur-md text-gray-800 text-justify transition-all duration-300">
    {/* <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
      {title}
    </h2> */}
    {/* <p>{content}</p> */}
    <Image src={content} height={height} width={width} alt="s"  className=" "/>
  </div>
);

export default Card;
