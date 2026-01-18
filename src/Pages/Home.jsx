import React, { useEffect, useState } from "react";
import ImageSlider from "../Components/ImageSlider";
import axios from "axios";
import PartnerCard from "./PartnerCard";
import Works from "./Works";
import Review from "./Review";
import AOS from "aos";
import "aos/dist/aos.css";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Newsletter from "./Newsletter/Newsletter";
import FeaturesSection from "./FeaturesSection/FeaturesSection";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation time
      easing: "ease-out",
      once: true, //
      offset: 100,
    });
  }, []);

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios(`https://study-mate-server-fawn.vercel.app/partners`).then((res) => {
      const ratingSort = res.data;
      const rated = ratingSort.sort((a, b) => b.rating - a.rating);
      const slice = rated.slice(0, 6);
      setPartners(slice);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div data-aos="zoom-up" data-aos-delay="500">
        <ImageSlider />
      </div>

      <div className="div w-10/12 mx-auto">
         <FeaturesSection></FeaturesSection>
      </div>

      

      <h1
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-5xl text-center my-10 font-semibold text-[#d94f00] opacity-80"
      >
        Top Study Partners
      </h1>

      <div className="top-rated px-5 w-10/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 space-y-5 my-10">
        {partners.map((partner, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200} // ei line add hoiche each card er jonne each card delay kora
            data-aos-duration="400"
          >
            <PartnerCard partner={partner}></PartnerCard>
          </div>
        ))}
      </div>

      <div className="div bg-gray-800">
        <div
          className="w-10/12 mx-auto"
          data-aos="fade-down"
          data-aos-delay="800"
        >
          <Works />
        </div>
      </div>

      <div
        className="w-10/12 mx-auto"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <Review></Review>
        

        <div className="cta-button mx-auto w-36 my-12">
        <button className="border border-[#f55a00] bg-transparent animate-bounce hover:animate-none 
                         px-4 py-2 rounded-md cursor-pointer font-semibold text-[#f55a00]
                        transition-all duration-200 ease-in-out shadow-sm hover:shadow-md">Find Partners</button>
        </div>
        <PrivacyPolicy />
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
