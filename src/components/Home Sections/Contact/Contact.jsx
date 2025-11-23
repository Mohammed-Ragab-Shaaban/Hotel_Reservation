import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const contact_h1_Ref = useRef(null);
  // console.log(contact_h1_Ref);
  // console.log(contact_h1_Ref.current);

  const onSubmit_Action = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (document.fonts) {
      document.fonts.ready
        .then(() => {
          if (contact_h1_Ref.current) {
            let contact_h1_split = SplitText.create(contact_h1_Ref.current, {
              type: "words,chars",
            });
            console.log(contact_h1_split.chars);
            console.log(contact_h1_split.words);
            gsap.from(contact_h1_split.chars, {
              scrollTrigger: {
                trigger: contact_h1_Ref.current,
                start: "top 80%",
                end: "+=200",
                scrub: true,
              },
              x: 200,
              autoAlpha: 0,
              stagger: 0.05,
            });
            return () => contact_h1_split.revert();
          }
        })
        .catch((err) => {
          console.error("Error waiting for fonts:", err);
        });
    }
  }, []);

  return (
    <div className="p-8 overflow-hidden">
      <p className="text-main-color text-2xl text-center tracking-widest">
        GET SPECIAL JOURNY
      </p>
      <h1
        className="text-5xl text-center py-4 headingFont"
        ref={contact_h1_Ref}
      >
        GET IN TOUCH
      </h1>
      <div>
        <form
          action=""
          onSubmit={onSubmit_Action}
          className="*:block *:w-full *:p-5"
        >
          <label>NAME*</label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            id="name"
            required
          />
          <label>EMAIL*</label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            required
          />
          <label>YOUR MESSAGE</label>
          <textarea placeholder="Your Message"></textarea>
          <button className=" button-hover-slide-left relative z-10 bg-main-color mt-5 text-white hover:text-second-color transition-all duration-500 ease-in-out">
            CHECK AVAILABILITY
          </button>
        </form>
      </div>
    </div>
  );
}
