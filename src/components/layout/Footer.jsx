import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, useGSAP);
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const footerRef = useRef();

  useGSAP(
    () => {
      gsap.from(".socialMediaIcon", {
        scrollTrigger: {
          trigger: ".theTrigger",
          start: "top 95%",
          // end: "bottom bottom",
          end: "+=100",
          scrub: true,
        },
        y: 50,
        autoAlpha: 0,
        stagger: 0.25,
      });
    },
    { scope: footerRef }
  );

  return (
    <div ref={footerRef} className="py-8">
      <div className="manualContainer">
        <div>
          <div className="theTrigger text-center *:text-2xl flex gap-4 justify-center hover:*:text-second-color hover:*:cursor-pointer *:transition-all *:duration-500">
            <span>
              <FontAwesomeIcon icon={faFacebook} className="socialMediaIcon" />
            </span>
            <span>
              <FontAwesomeIcon icon={faInstagram} className="socialMediaIcon" />
            </span>
            <span>
              <FontAwesomeIcon icon={faLinkedin} className="socialMediaIcon" />
            </span>
            <span>
              <FontAwesomeIcon icon={faXTwitter} className="socialMediaIcon" />
            </span>
          </div>

          <div className=" flex justify-between items-center border-t py-8">
            <span>© Luxestay. All Rights Reserved.</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
