import Image from "next/image";


const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row text-center gap-[100px]">
      <div className="flex flex-col flex-1 gap-[50px]">
        <h1 className="text-[64px] md:text-[96px]">
          Creative Thoughts Agency.
        </h1>
        <p className="text-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex justify-center gap-[20px]">
          <button className="p-5 min-w-[120px] cursor-pointer border-none rounded-md bg-[--btn] text-[--text]">
            Learn More
          </button>
          <button className="p-5 min-w-[120px] cursor-pointer border-none rounded-md">
            Contact
          </button>
        </div>
        <div className="w-full md:w-[500px] h-[50px] relative filter grayscale-[100%]">
          <Image src="/brands.png" alt="" fill className="" />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/hero.gif" alt="" fill className="" />
      </div>
    </div>
  );
};

export default Home;
