import React, { useRef } from "react";
import { Link } from "react-router";
import service1 from "../../assets/images/Services 1.png";
import service2 from "../../assets/images/Services 2.png";
import service3 from "../../assets/images/Services 3.jpg";
import service4 from "../../assets/images/Services 4.png";
import { ScrollTrigger, SplitText, gsap } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

gsap.registerPlugin(SplitText);

export function Services() {
  const textEffectRef = useRef(null);

  useGSAP(() => {
    if (textEffectRef.current) {
      let split = SplitText.create(textEffectRef.current, {
        type: "words,chars",
      });
      // let split = new SplitText(textEffectRef.current, { type: 'words,chars' });
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: textEffectRef.current,
          // toggleActions: "restart pause reverse none",
          start: "top 70%",
          end: "+=200",
          // markers:true,
          scrub: true,
        },
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
      return () => split.revert();
    }
  }, []);

  return (
    <div>
      <div className="manualContainer py-10">
        <div className="text-center p-10 text-6xl">
          <h1 className="headingFont textEffect" ref={textEffectRef}>
            {" "}
            Quality Services & <br /> Activities Near you
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 kkkkk">
          <Service
            bg_image={service1}
            prag_1="MAR 28, 2024"
            heading_2="About Us"
            prag_2="It refers to an establishment that provides lodging, typically on a short-term basis. Hotels offer a range of services, such as room service."
            link="Explore More"
          />
          <Service
            bg_image={service2}
            prag_1="INDOOR"
            heading_2="Restaurant"
            prag_2="Our restaurant offers a warm, inviting atmosphere perfect for any occasion, whether it’s a casual lunch, romantic dinner, or special celebration."
            link="Explore More"
          />
          <Service
            bg_image={service3}
            prag_1="MAR 19, 2024"
            heading_2="Entertaiment"
            prag_2="Our restaurant offers a warm, inviting atmosphere perfect for any occasion, whether it’s a casual lunch, romantic dinner, or special celebration."
            link="Explore More"
          />
          <Service
            bg_image={service4}
            prag_1="MAR 19, 2024"
            heading_2="The Best Hotels For Family Vacations"
            prag_2="It refers to an establishment that provides lodging, typically on a short-term basis."
            link="Explore More"
          />
        </div>
      </div>
    </div>
  );
}

export function Service(props) {
  return (
    <div
      className="*:hover:scale-y-100 flex justify-center items-center text-white min-h-96 p-3 sm:w-1/4"
      style={{
        backgroundImage: `url(${props.bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h scale-y-0 transition-all duration-500 origin-top  bg-opacity-70 bg-black text-center *:mb-3 p-3 flex flex-col justify-center items-center">
        <p className="text-main-color">{props.prag_1}</p>
        <h2 className="text-2xl">{props.heading_2}</h2>
        <p>{props.prag_2}</p>
        <Link className="text-main-color underline">{props.link}</Link>
      </div>
    </div>
  );
}
