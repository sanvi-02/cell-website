import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Features from "@/components/Feature";

export default function Home(){
  return(
    <main>
        <Navbar />
        <Hero />
        <Intro/>
        <Features/>
    </main>
  )
}