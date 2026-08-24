import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Features from "@/components/Feature";
import Initiatives from "@/components/Initiatives";
import PastSpeakers from "@/components/Spakers";

export default function Home(){
  return(
    <main>
        <Navbar />
        <Hero />
        <Intro/>
        <Features/>
        <Initiatives />
        <PastSpeakers/>
    </main>
  )
}