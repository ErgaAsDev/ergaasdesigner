import { useInView } from "react-intersection-observer";
import styles from "./section.module.css";
import Image from "next/image";
import sectionOne from "../images/section1.svg";
import sectionSecond from "../images/section2.svg";
import sectionThird from "../images/section3.svg";
import sectionFourth from "../images/section4.svg";
import stuffOne from "../images/Stuff1.png";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";
import { GiErlenmeyer } from "react-icons/gi";
import { GiOpenBook } from "react-icons/gi";

const Section = ({ hexColor }) => {
  const { ref: firstSection, inView } = useInView({});
  const { ref: secondSection, inView: secondView } = useInView({});
  const { ref: thirdSection, inView: thirdView } = useInView({});
  const { ref: fourthSection, inView: fourthView } = useInView({});
  return (
    <div className="flex flex-col items-center">
      <h1
        style={{ backgroundColor: `${hexColor}` }}
        className="h-[80px] md:h-[220px] w-[100%] -z-20 flex items-center justify-center text-4xl text-[#FFF] font-bold mb-7"
      >
        About Me
      </h1>
      <svg
        id="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
        className="rotate-180 absolute top-[-30px]"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g id="parallax">
          <use xlinkHref="#gentle-wave" x="50" y="-2" fill={`${hexColor}`} />
        </g>
      </svg>
      <div className="flex flex-col gap-[120px] items-center">
        <div className="flex flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-center md:gap-[100px]">
          <div
            ref={firstSection}
            className={`${styles.cardHiddenLeft} ${
              inView ? styles.cardShowLeft : ""
            }`}
          >
            <h2
              className="w-[320px] md:w-[400px] md:text-2xl text-center font-semibold"
              style={{ color: `${hexColor}` }}
            >
              Frontend Expertise
            </h2>
            <h2 className="w-[320px] md:w-[600px] md:text-xl">
              As a designer, I not only bring a strong design sensibility to the
              table, but I'm also proficient in frontend development. This
              unique combination of skills allows me to seamlessly transition
              from envisioning designs to turning them into reality. Moreover,
              it fosters a seamless collaboration with developers, ensuring our
              creative visions come to life in harmony.
            </h2>
          </div>
          <BiLogoReact
            size={170}
            color={hexColor}
            className={`${styles.cardHiddenRight} ${
              inView ? styles.cardShowRight : ""
            }`}
          />
          {/* <Image
            src={sectionOne}
            className={`w-[240px] md:w-[360px] ${styles.cardHiddenRight} ${
              inView ? styles.cardShowRight : ""
            }`}
          /> */}
        </div>
        <div className="flex flex-col items-center justify-center mt-5 md:flex md:flex-row md:items-center md:justify-center md:gap-[100px]">
          {/* <Image
            src={sectionSecond}
            className={`w-[240px] md:w-[360px] ${styles.cardHiddenLeft} ${
              secondView ? styles.cardShowLeft : ""
            }`}
          /> */}
          <BiLogoFigma
            size={150}
            color={hexColor}
            className={`${styles.cardHiddenLeft} ${
              secondView ? styles.cardShowLeft : ""
            }`}
          />
          <div
            ref={secondSection}
            className={`${styles.cardHiddenRight} ${
              secondView ? styles.cardShowRight : ""
            } flex flex-row items-center`}
          >
            <h2
              className="w-[320px] md:w-[400px] md:text-2xl  font-semibold"
              style={{ color: `${hexColor}` }}
            >
              User-Centric Design Pioneer
            </h2>
            <h2 className="w-[320px] md:w-[600px] md:text-xl">
              In the world of UI/UX design, I'm on a mission to craft meaningful
              experiences. My design philosophy revolves around the end user -
              understanding their needs, behaviors, and desires. Beyond the
              design canvas, I'm a hands-on frontend developer, capable of
              bringing my concepts to life.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 md:flex md:flex-row md:items-center md:justify-center md:gap-[100px]">
          <div
            ref={thirdSection}
            className={`${styles.cardHiddenLeft} ${
              thirdView ? styles.cardShowLeft : ""
            }`}
          >
            <h2
              className="w-[320px] md:w-[400px] md:text-2xl text-center  font-semibold"
              style={{ color: `${hexColor}` }}
            >
              Innovative Design Visionary
            </h2>
            <h2 className="w-[320px] md:w-[600px] md:text-xl">
              I'm a UI/UX designer driven by a passion for pioneering unique and
              innovative design ideas. I believe that exceptional design is not
              just about aesthetics but also about pushing the boundaries of
              creativity.
            </h2>
          </div>
          <GiErlenmeyer
            size={150}
            color={hexColor}
            className={`${styles.cardHiddenRight} ${
              thirdView ? styles.cardShowRight : ""
            }`}
          />
          {/* <Image
            src={sectionThird}
            className={`w-[240px] md:w-[360px] ${styles.cardHiddenRight} ${
              thirdView ? styles.cardShowRight : ""
            }`}
          /> */}
        </div>
        <div className="flex flex-col items-center justify-center mt-5 md:flex md:flex-row md:gap-[100px] ">
          {/* <Image
            src={sectionFourth}
            className={`w-[240px] md:w-[360px] ${styles.cardHiddenLeft} ${
              fourthView ? styles.cardShowLeft : ""
            }`}
          /> */}
          <GiOpenBook
            size={150}
            color={hexColor}
            className={`${styles.cardHiddenLeft} ${
              fourthView ? styles.cardShowLeft : ""
            }`}
          />
          <div
            ref={fourthSection}
            className={`flex flex-row items-center ${styles.cardHiddenRight} ${
              fourthView ? styles.cardShowRight : ""
            }`}
          >
            <h2
              className="w-[320px] md:w-[400px] md:text-2xl text-center  font-semibold"
              style={{ color: `${hexColor}` }}
            >
              Perpetual Learner and Design Enthusiast
            </h2>
            <h2 className="w-[320px] md:w-[500px] md:text-xl">
              My journey as a UI/UX designer is an unceasing quest for
              improvement and growth. I have an insatiable appetite for
              learning, constantly seeking new insights, techniques, and trends
              to refine my craft.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
