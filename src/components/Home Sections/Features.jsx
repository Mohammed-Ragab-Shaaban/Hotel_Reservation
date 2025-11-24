import React from "react";
import featureImage from "../../assets/images/bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faFaceSmile,
  faStar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP, ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, useGSAP);

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

export function Features() {
  const style = {
    backgroundImage: `url(${featureImage})`,
    // backgroundColor : "yellow",
    // height: "300px",
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
  };

  useGSAP(() => {
    let ff = gsap.matchMedia();
    ff.add(
      {
        isMobile: "(max-width: 640px)",
        isTablet: "(min-width: 641px) and (max-width: 1024px)",
        isDesktop: "(min-width: 1025px)",
      },
      (context) => {
        let { isMobile, isTablet, isDesktop } = context.conditions;

        if (isDesktop) {
          gsap.from(".right", {
            scrollTrigger: {
              trigger: ".right",
              // toggleActions: "restart pause reverse none",
              start: "top 80%",
              end: "+=100",
              // markers:true,
              scrub: true,
            },
            rotateZ: -45,
            transformOrigin: "bottom left",
            autoAlpha: 0,
          });
          gsap.from(".left", {
            scrollTrigger: {
              trigger: ".left",
              // toggleActions: "restart pause reverse none",
              start: "top 80%",
              end: "+=100",
              // markers:true,
              scrub: true,
            },
            rotateZ: 45,
            transformOrigin: "bottom right",
            autoAlpha: 0,
          });
        }
        /////
        if (isTablet) {
          gsap.from(".right", {
            scrollTrigger: {
              trigger: ".right",
              // toggleActions: "restart pause reverse none",
              start: "top 80%",
              end: "+=100",
              // markers:true,
              scrub: true,
            },
            rotateZ: -45,
            transformOrigin: "bottom left",
            autoAlpha: 0,
          });
          gsap.from(".left", {
            scrollTrigger: {
              trigger: ".left",
              // toggleActions: "restart pause reverse none",
              start: "top 80%",
              end: "+=100",
              // markers:true,
              scrub: true,
            },
            rotateZ: 45,
            transformOrigin: "bottom right",
            autoAlpha: 0,
          });
        }
        /////
        if (isMobile) {
          gsap.from(".right", {
            scrollTrigger: {
              trigger: ".right",
              // toggleActions: "restart pause reverse none",
              start: "top 40%",
              end: "+=100",
              // markers:true,
              scrub: true,
            },
            rotateZ: -45,
            transformOrigin: "bottom left",
            autoAlpha: 0,
          });
          gsap.from(".left", {
            scrollTrigger: {
              trigger: ".left",
              // toggleActions: "restart pause reverse none",
              start: "top 40%",
              end: "+=100",
              // markers:true,
              scrub: true,
            },
            rotateZ: 45,
            transformOrigin: "bottom right",
            autoAlpha: 0,
          });
        }
        /////
      }
    );
  }, {});

  return (
    <div style={style} className="pt-96 sm:pt-48 pb-16">
      <div className="manualContainer flex flex-col sm:flex-row gap-14 sm:gap-3  *:grow rounded *:pt-16 *:pb-8 px-8">
        <SingleFeatures
          animation="right"
          num="169"
          feature="Superior Rooms"
          iconn={faBed}
          bgColor="bg-orange-500"
        />
        <SingleFeatures
          animation="right"
          num="24"
          feature="Restaurant"
          iconn={faUtensils}
          bgColor="bg-green-500"
        />
        <SingleFeatures
          animation="left"
          num="12"
          feature="Years of Experience"
          iconn={faStar}
          bgColor="bg-purple-500"
        />
        <SingleFeatures
          animation="left"
          num="14"
          feature="Happy Clients"
          iconn={faFaceSmile}
          bgColor="bg-lime-500"
        />
      </div>
    </div>
  );
}

export function SingleFeatures(props) {
  return (
    <div
      className={` ${props.animation} bg-white flex flex-col justify-center items-center relative `}
    >
      <div
        className={`${props.bgColor} p-4 text-3xl rounded-full absolute right-0 left-0 -top-1/4 m-auto w-fit text-white`}
      >
        <FontAwesomeIcon icon={props.iconn} />
      </div>
      <p className="text-5xl">{props.num}</p>
      <span>{props.feature}</span>
    </div>
  );
}
