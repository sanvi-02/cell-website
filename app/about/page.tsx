import OurVision from "./OurVision";
import Header from "../components/Header";
import AboutHero from "./AboutHero";
import OurImpact from "./OurImpact";
import OurHistory from "./OurHistory";
import BuiltHere from "./BuiltHere";
import EllipticalMap from "./EllipticalMap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function AboutPage() {
    return (    
        <>
            <Navbar />
            <AboutHero />
            <OurVision />
            <OurImpact />
            <OurHistory />
            <BuiltHere />
            <EllipticalMap />
            <Footer />
            </>
)}