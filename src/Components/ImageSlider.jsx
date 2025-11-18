import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

const images = [
  {
    img: image1,
    title: "STUDY ?",
    subtitle: "Building Dreams Line by Line.",
    caption: "Best moments with friends.",
  },
  {
    img: image2,
    title: "GROUP STUDY?",
    subtitle: "Learn Together, Grow Together.",
    caption: "When passion meets caffeine.",
  },
  {
    img: image3,
    title: "PROJECT TIME?",
    subtitle: "Teamwork Makes the Dream Work.",
    caption: "Creating magic together.",
  },
  {
    img: image5,
    title: "LIBRARY PARTNER",
    subtitle: "Go To Library And Find Partner!",
    caption: "Where real learning begins!",
  },
  {
    img: image4,
    title: "REAL  PARTNER-",
    subtitle: "Tips And Tricks For Find Partner",
    caption: "Find your human?",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="h-auto bg-linear-to-br from-slate-900 via-blue-950 to-black flex items-center justify-center relative overflow-hidden">
      <div className="max-w-12/12 w-full ">
        <div className="relative overflow-hidden shadow-2xl">
          {/* Slider Images */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((slide, i) => (
              <div key={i} className="w-full shrink-0 relative">
                
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-[530px] object-cover opacity-[0.3]"
                />

                
                {/* Dark overlay + Animated Text */}

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex items-end">
                  <div className="pb-16 pl-12 text-white">
                    
                    <div
                      key={current} 
                      className="animate-fadeSlideUp" 
                    >
                      <h1 className="text-4xl md:text-7xl font-extrabold mb-2 bg-clip-text text-transparent bg-linear-to-r from-white to-purple-400">
                        {images[current].title}
                      </h1>
                      <p className="text-xl md:text-3xl font-semibold opacity-70 animate-delay-300">
                        {images[current].subtitle}
                      </p>
                      <p className="text-lg mt-2 font-medium opacity-70 animate-delay-500">
                        {images[current].caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute cursor-pointer left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute cursor-pointer right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${
                  current === i
                    ? "bg-white w-12 h-3 rounded-full"
                    : "bg-white/50 w-3 h-3 rounded-full hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
