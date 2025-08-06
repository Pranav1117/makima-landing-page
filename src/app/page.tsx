import Image from "next/image";
import { UnifrakturCook } from "next/font/google";
import MainImageContainer from "./components/MotionDiv";
import Carousel from "./components/carousel";
import Card from "./components/Card";

export const gothicFont = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  const CARDS = [
    {
      path: "/standing.png",
      size: { height: 750, width: 950 },
      alt: "standing one photo",
    },
    {
      path: "/standing-2.png",
      size: { height: 850, width: 350 },
      alt: "standing one photo",
    },
  ];

  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-between">
        <div
          className={`${gothicFont.className} text-[6rem] h-32 text-amber-800`}
        >
          MAKIMA
        </div>
        <div className="w-[70%] float-right">
          <div className="z-1 text-white h-32 overflow-hidden line-clamp-custom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            sunt, voluptate vel dolore impedit magni cumque! Similique maxime
            libero dolorum suscipit quaerat, ipsum tempore illum praesentium
            natus impedit autem blanditiis. Provident laboriosam reiciendis,
            vero nihil veritatis qui. Nulla aperiam quasi qui quis, dolor
            assumenda eos incidunt mollitia nihil maiores voluptatum dignissimos
            earum voluptate maxime velit ad, soluta animi nesciunt alias!
            Aliquam magni est sapiente tenetur obcaecati minus, sit in
            voluptates facere! Placeat ex incidunt laudantium dolorem unde fugit
            nisi possimus obcaecati repudiandae commodi? Laudantium porro
            corrupti repudiandae sequi? Mollitia, natus! Veniam cumque velit
            culpa officiis reprehenderit debitis, nihil deserunt molestias
            reiciendis aperiam ratione et ea sint eaque itaque necessitatibus
            error saepe rem nostrum atque alias vero sed optio! Beatae, nostrum.
            Cum, dolore architecto! Ipsum molestiae, magni quidem porro magnam
            iusto. Quo, sit quaerat, delectus doloribus omnis voluptatibus
            aliquid, ipsam error adipisci necessitatibus eveniet dolorem soluta
            cum natus dicta exercitationem aliquam. Fugiat illum a, inventore
            facere labore natus commodi impedit vitae exercitationem. Dolor nemo
            eveniet laboriosam non nisi eligendi atque pariatur enim
          </div>
        </div>
      </div>

      {/*  Main Image */}
      {/* <MainImageContainer className="">
        <div className="flex items-center justify-between">
          <div className="relative w-[450px] h-[750px]">
            <Image
              src="/standing-2.png"
              alt="standing makima"
              fill
              className="object-contain" // or "object-cover" depending on desired behavior
              priority
            />
          </div>

         
        </div>

         <div className="flex items-center justify-center">
          <div className="relative w-[450px] h-[650px]">
            <Image
              src="/standing.png"
              alt="standing makima"
              fill
              className="object-contain" // or "object-cover" depending on desired behavior
              priority
            />
          </div>

         
        </div>
      </MainImageContainer> */}

      {/* <div className="min-h-screen flex flex-col justify-end"> */}
        <Carousel>
          {CARDS.map((item, i) => (
            <Card
              key={i}
              title={`Card ${i + 1}`}
              content={item.path}
              height={item.size.height}
              width={item.size.width}
            />
          ))}
        </Carousel>
      {/* </div> */}
    </div>
  );
}
