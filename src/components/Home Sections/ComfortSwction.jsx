import React, { useRef } from "react";
import bg_Comfortable from "../../assets/images/Comfort_bg.png";
import {
  faBedPulse,
  faCarOn,
  faCircleQuestion,
  faPersonSkiingNordic,
  faTableTennis,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import comfort_video from "../../assets/videos/comfort_video.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

gsap.registerPlugin(useGSAP);

export function ComfortSwction() {
  const sty = {
    backgroundImage: `url(${bg_Comfortable})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const textEffect_Ref = useRef(null);
  const textEffect_Ref_p = useRef(null);
  const comfort_scop_Ref = useRef();
  // const textEffect_Ref_right_item = useRef(null);

  useGSAP(
    () => {
      //for heading
      if (textEffect_Ref.current) {
        gsap.from(textEffect_Ref.current, {
          scrollTrigger: {
            trigger: textEffect_Ref.current,
            start: "top 80%",
            end: "+=100",
            scrub: true,
          },
          y: 100,
          autoAlpha: 0,
        });
      }

      //for pragraph
      if (textEffect_Ref_p.current) {
        let tl = gsap.timeline();
        tl.from(textEffect_Ref_p.current, {
          scrollTrigger: {
            trigger: textEffect_Ref.current,
            start: "top 80%",
            end: "+=100",
            toggleActions: "play none none none",
            // scrub:true
          },
          x: 200,
          autoAlpha: 0,
          duration: 0.5,
        })
          .to(
            textEffect_Ref_p.current,
            {
              x: 10, // الحركة الأفقية القصوى للاهتزاز
              duration: 0.2, // مدة قصيرة جداً
              repeat: 2, // التكرار 4 مرات = 2 ذهاب و 2 إياب (أي اهتزازتين كاملتين)
              yoyo: true, // الرجوع للخلف لإنشاء الاهتزاز
              ease: "power1.inOut",
            },
            "<"
          )
          .to(textEffect_Ref_p.current, {
            x: 0, // التأكد من العودة إلى 0 (الوضع الصحيح)
            duration: 0.1, // مدة قصيرة جداً
            ease: "none",
          });
      }

      //media
      let cc = gsap.matchMedia();
      cc.add(
        {
          isMobile: "(max-width: 640px)",
          isTablet: "(max-width: 768px)",
          isDesktop: "(max-width: 1536px)",
        },
        (context) => {
          let { isMobile, isTablet, isDesktop } = context.conditions;

          if (isDesktop) {
            //for left items
            gsap.from(".gsap-item-left", {
              scrollTrigger: {
                trigger: ".gsap-item-left",
                start: "center 70%",
                end: "+=200",
                // toggleActions: "play none none none"
                scrub: true,
              },
              rotateZ: 45,
              autoAlpha: 0,
              // duration: 0.5,
              stagger: 0.5,
            });
            //for right items
            gsap.from(".gsap-item-right", {
              scrollTrigger: {
                trigger: ".gsap-item-right",
                start: "center 70%",
                end: "+=200",
                // toggleActions: "play none none none"
                scrub: true,
              },
              rotateZ: -45,
              autoAlpha: 0,
              // duration: 0.5,
              stagger: 0.5,
            });
          }

          // is tablet
          if (isTablet) {
            //for left items
            gsap.from(".gsap-item-left", {
              scrollTrigger: {
                trigger: ".gsap-item-left",
                start: "center 70%",
                end: "+=200",
                // toggleActions: "play none none none"
                scrub: true,
              },
              rotateZ: 45,
              autoAlpha: 0,
              // duration: 0.5,
              stagger: 0.5,
            });
            //for right items
            gsap.from(".gsap-item-right", {
              scrollTrigger: {
                trigger: ".gsap-item-right",
                start: "center 70%",
                end: "+=200",
                // toggleActions: "play none none none"
                scrub: true,
              },
              rotateZ: -45,
              autoAlpha: 0,
              // duration: 0.5,
              stagger: 0.5,
            });
          }

          // is Mobile
          if (isMobile) {
            //for left items
            gsap.from(".gsap-item-left", {
              scrollTrigger: {
                trigger: ".gsap-item-left",
                start: "top 60%",
                end: "+=200",
                // toggleActions: "play none none none"
                scrub: true,
              },
              x: -200,
              autoAlpha: 0,
              // duration: 1,
              stagger: 0.5,
            });
            //for right items
            gsap.from(".gsap-item-right", {
              scrollTrigger: {
                trigger: ".gsap-item-right",
                start: "top 60%",
                end: "+=200",
                // toggleActions: "play none none none"
                scrub: true,
              },
              x: 300,
              autoAlpha: 0,
              // duration: 0.5,
              stagger: 0.5,
            });
          }
        }
      );
      /////
    },
    { scope: comfort_scop_Ref }
  );

  return (
    <div style={sty} ref={comfort_scop_Ref}>
      <div className="manualContainer py-8 text-white">
        <div className="flex flex-col sm:flex-row *:grow *:p-3 sm:*:w-1/2">
          <div ref={textEffect_Ref}>
            <h1 className="text-4xl leading-10">
              YOUR COMFORT IS OUR PRIORITY
            </h1>
          </div>
          <div ref={textEffect_Ref_p}>
            <p>
              Our Comfort Is Our Priority” expresses a commitment to providing
              the highest level of comfort and satisfaction for our customers.
              Whether you’re staying with us, using our services, or purchasing
              our products, we prioritize your needs and ensure a relaxing and
              enjoyable experience.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 justify-center *:my-4 overflow-hidden">
          <div className="flex flex-col gap-5 text-center sm:text-right">
            <ComfortSwctionItem
              item_H="24h Front Desk"
              item_P="Eventum nobis nunc et leo urgeant eos etiam sint et vel stante at vel itaque iste modestia."
              item_Icon={faCircleQuestion}
              class_Name="gsap-item-left"
            />
            <ComfortSwctionItem
              item_H="Restaurants"
              item_P="Eventum nobis nunc et leo urgeant eos etiam sint et vel stante at vel itaque iste modestia."
              item_Icon={faUtensils}
              class_Name="gsap-item-left"
            />
            <ComfortSwctionItem
              item_H="Superior Room"
              item_P="Eventum nobis nunc et leo urgeant eos etiam sint et vel stante at vel itaque iste modestia."
              item_Icon={faBedPulse}
              class_Name="gsap-item-left"
            />
          </div>

          <div className="outline outline-second-color outline-offset-8 w-10/12 justify-self-center self-end h-112 rounded-t-full overflow-hidden">
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src={comfort_video} type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col gap-5 text-center sm:text-left">
            <ComfortSwctionItem
              item_H="Airport Transfers"
              item_P="Eventum nobis nunc et leo urgeant eos etiam sint et vel stante at vel itaque iste modestia."
              item_Icon={faCarOn}
              class_Name="gsap-item-right"
            />
            <ComfortSwctionItem
              item_H="Outdoor Activities"
              item_P="Eventum nobis nunc et leo urgeant eos etiam sint et vel stante at vel itaque iste modestia."
              item_Icon={faPersonSkiingNordic}
              class_Name="gsap-item-right"
            />
            <ComfortSwctionItem
              item_H="Wellness"
              item_P="Eventum nobis nunc et leo urgeant eos etiam sint et vel stante at vel itaque iste modestia."
              item_Icon={faTableTennis}
              class_Name="gsap-item-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComfortSwctionItem(props) {
  return (
    <div className={`${props.class_Name} text-pragraph-color *:mb-3`}>
      <div>
        <FontAwesomeIcon icon={props.item_Icon} size="3x" />
      </div>
      <h2 className="text-second-color text-2xl">{props.item_H}</h2>
      <p>{props.item_P}</p>
    </div>
  );
}
