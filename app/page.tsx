
"use client";
 import { useEffect } from "react"; 
 import AOS from "aos";
  import "aos/dist/aos.css";


import Baner from "./home/baner"
import DigenToBaner from "./home/sectionToBaner"
import Cridet from "./home/cridetSection"
import LogoAnimation from "./home/logoAnimation"
import Broject from "./home/pogect"
import ApoutUs from "./home/aboutUs"
import Articles from "./home/articles"
import Jops from "./home/jobs"
import Footer from "./partes/fotter"
export default function Home() {


  useEffect(() => { AOS.init({ duration: 1000, once: false, }); }, []);


  return (
    <div className="flex flex-col ">
      <Baner />
      <DigenToBaner />
      <Cridet />
      <LogoAnimation />
      <Broject />
      <ApoutUs />
      <Articles/>
      <Jops/>
      <Footer/>
    </div>
  );
}
