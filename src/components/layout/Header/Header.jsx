import React, { useRef } from "react";
import ContactBar from "./ContactBar";
import NavBar from "./NavBar";
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

// import images
import image1 from "../../../assets/images/home-3_hero_bg.png";
import image2 from "../../../assets/images/home3_hero_bg_1.png";
import video1 from "../../../assets/videos/hotel2-2.mp4";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

export default function Header() {
  const split_heading_Ref = useRef(null);
  const split_prag_Ref = useRef(null);

  const spliting = useGSAP(() => {
    if (document.fonts) {
      document.fonts.ready
        .then(() => {
          if (split_heading_Ref.current) {
            let split_heading = SplitText.create(split_heading_Ref.current, {
              type: "words,chars",
            });
            gsap.from(split_heading.chars, {
              x: 200,
              autoAlpha: 0,
              stagger: 0.15,
            });
            return () => split_heading.revert();
          }
        })
        .catch((err) => {
          console.error("Error waiting for fonts:", err);
        });
    }
  }, []);

  const spliting_prag = useGSAP(() => {
    if (document.fonts) {
      document.fonts.ready
        .then(() => {
          if (split_prag_Ref.current) {
            let split_prag = SplitText.create(split_prag_Ref.current, {
              type: "words,chars",
            });
            gsap.from(split_prag.chars, {
              x: 200,
              autoAlpha: 0,
              stagger: 0.15,
            });
            return () => split_prag.revert();
          }
        })
        .catch((err) => {
          console.error("Error waiting for fonts:", err);
        });
    }
  }, []);

  return (
    <div className="absolute top-0 right-0 left-0 -z-10 h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute *:text-center *:m-auto z-10 top-1/3 sm:top-1/2 left-1/2 transform -translate-x-1/2 text-white *:w-max-content">
          <h1
            ref={split_heading_Ref}
            className="text-second-color sm:text-2xl uppercase tracking-widest "
          >
            Luxury & Comfort
          </h1>
          <p
            ref={split_prag_Ref}
            className=" headingFont px-2 text-3xl sm:text-5xl uppercase"
          >
            Sophisticated Alpine <br /> Resort In
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={() => {
            spliting, spliting_prag;
          }}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src={image1}
              alt="hotel"
              className="object-cover w-full h-screen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image2}
              alt="hotel"
              className="object-cover w-full h-screen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay loop muted className="object-cover w-full h-screen">
              <source src={video1} />
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
