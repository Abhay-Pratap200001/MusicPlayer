import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-96"
          fill="white"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-700">
          Master the art of mussic
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehenseive music courses and transform your music
          journy today. whether you're a beginner or looking to refine your
          skills, join us to unlock your true <br /> potential.
        </p>


        <div className="mt-4">
        <Button>
          <Link href={"/coursed"}>Explore Courses</Link>
        </Button>
        </div>
          
      </div>
    </div>
  );
};

export default HeroSection;
