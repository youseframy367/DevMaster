import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./partes/header";
import Home2 from "./home/home2";
import Consultation from "./FreeConsultation/FreeConsultation";
import About from "./about/about";
import ServerRequst from "./pages/serverReqst";
import Serves from "./serves/serves";
import BrojectGet from "./progect/project";
import JopsAll from "./jops/jops";
import ArticlsAll from "./articles/article";
import DetalesJop from "./jops/detailsJop";
import ApplyTheJop from "./jops/ApplyForTheJop";
import Contact from "./Contact/contact";
import Footer from "./partes/fotter";
import JopsDetals from "./mopileScren/home/bages/jobDetals";
import Pirivacy from "./pages/PrivacyPolicy";
import HomeMopil from "./mopileScren/home/homeScren";
import AboutSmoleScren from "./mopileScren/home/about/about";
import FreeConseluttion from './mopileScren/home/bages/freeConselution';
import ContactUs from "./mopileScren/home/bages/ContactUs";
import PrivacyM from "./mopileScren/home/bages/Privacy";
import AOS from "aos";
import ServerRequstSmoleScren from "./mopileScren/home/bages/ServiceRequest";
import "aos/dist/aos.css"; // ملفات CSS الخاصة بالأنميشن
function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // مدة الأنميشن 1 ثانية
  }, []);


  const [isLaptopUp, setIsLaptopUp] = useState(window.innerWidth >= 1250);

  useEffect(() => {
    const handleResize = () => setIsLaptopUp(window.innerWidth >= 1250);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLaptopUp ? (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin:"0px" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/about" element={<About />} />
          <Route path="/serverReqst" element={<ServerRequst />} />
          <Route path="/services" element={<Serves />} />
          <Route path="/Products" element={<BrojectGet />} />
          <Route path="/JobsAll" element={<JopsAll />} />
          <Route path="/news" element={<ArticlsAll />} />
          <Route path="/detailsJop" element={<DetalesJop />} />
          <Route path="/ApplyTheJop" element={<ApplyTheJop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pravic" element={<Pirivacy />} />
        </Routes>
      </div>
    </div>
  ) : (
<Routes>
    <Route path="/" element={<HomeMopil/>}/>
    <Route path="/consultation" element={<FreeConseluttion/>}/>
    <Route path="/about"element={<AboutSmoleScren/>}/>
    <Route path="/detailsJop" element={<JopsDetals/>}/>
    <Route path="/Contact" element={<ContactUs/>}/>
    <Route path="/serverReqstM" element={<ServerRequstSmoleScren/>}/>
    <Route path="/Pravic" element={<PrivacyM/>}/>
    </Routes>
  );
}

export default App;
