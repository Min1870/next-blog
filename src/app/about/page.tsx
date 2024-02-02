import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className="flex flex-col text-center lg:flex-row gap-[100px] md:text-start">
      <div className="flex flex-1 flex-col gap-[50px]">
        <h2 className="text-[--btn]">About Agency</h2>
        <h1 className="text-[54px]">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-[20px] font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex flex-col gap-[50px] md:gap-0 md:flex-row items-center justify-between">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[--btn]">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[--btn]">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[--btn]">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default AboutPage;
