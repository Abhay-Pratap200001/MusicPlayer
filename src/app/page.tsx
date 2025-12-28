import FaeturedCourses from "@/components/FaeturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonialCard from "@/components/MusicSchoolTestimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0/96 antialiased bg-grid-white/[0.2]">
      <HeroSection/>
      <FaeturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonialCard/>
    </main>
  );
}
