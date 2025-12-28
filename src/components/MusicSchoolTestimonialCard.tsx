"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me perfectly.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production.",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];



const MusicSchoolTestimonialCard = () => {
  return (
    <div className="relative h-[30rem] w-full overflow-hidden bg-white dark:bg-black flex flex-col items-center justify-center">

      {/* Grid Background */}
      <div
        className="absolute inset-0 [background-size:20px_20px]
        [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
        dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"/>

      {/* Fade overlay (optional but recommended) */}
    <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

      {/* Content */}
    <h2 className="relative z-10 text-3xl font-bold text-center mb-8">
        HEAR OUR HARMONY: VOICE OF SUCCESS
      </h2>

    <div className="relative z-10 flex justify-center w-full overflow-hidden px-4 sm:px-6lg:px-8">
        <div className="w-full">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicSchoolTestimonialCard;
