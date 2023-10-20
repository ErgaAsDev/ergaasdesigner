import styles from "./cards.module.scss";
import Image from "next/image";
import stuffOne from "../images/Variant1.png";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

// //

const Cards = ({ hexColor }) => {
  return (
    <div className="z-20 mt-[120px]">
      <div className="flex items-center justify-center">
        <h1
          style={{ color: `${hexColor}` }}
          className="w-[100%] h-[80px] md:h-[120px] flex items-center justify-center text-2xl md:text-4xl font-bold"
        >
          My Work
          <BsFillRocketTakeoffFill className="ml-5 animate-bounce" />
        </h1>
      </div>
      <main className={styles.pagecontent}>
        {/* <div className="bg-variantOne w-[100px] h-[100px]"></div> */}
        {/* <Image src={stuffOne} width={100} height={100} /> */}
        <div className={`${styles.card} `}>
          <div className={styles.content}>
            {/* <h2 className={`${styles.title}`} style={{ color: `${hexColor}` }}>
              Cryptoon
            </h2> */}
            <p className={styles.copy}>
              A responsive modern UI crypto landing page and dashboard.
            </p>
            <div className="flex gap-5">
              <a
                href="https://www.figma.com/file/q1HfDdoZLdBv01x127OWLw/Cryptoon---Portfolio?type=design&node-id=0%3A1&mode=design&t=Bdi9vKbsZQoE2B9f-1"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.btn}>View</button>
              </a>
              <a
                href="https://cryptoon-cryptopages.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.btn}>Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.copy}>
              Introducing Jobizz, the game-changing mobile app that transforms
              your job search into a dynamic and empowering journey.
            </p>
            <a
              href="https://www.figma.com/file/KpUFwpgrmCj7PQtJHTLWxE/Jobizz---Portfolio?type=design&node-id=0-1&mode=design"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.btn}>View</button>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.copy}>
              Mobility, the sleek e-commerce app I meticulously crafted on
              Figma, revolutionizes shopping. Seamlessly blending style and
              functionality, the app offers an immersive experience.
            </p>
            <a
              href="https://www.figma.com/file/XYvODOSrV1LyxaKwjNLsL5/Mobility---Portfolio?type=design&node-id=1%3A7534&mode=design&t=z2j0WauznHppEv0P-1"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.btn}>View</button>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.copy}>
              Experience the future of car rentals with Maurental, a
              groundbreaking application meticulously designed by me on Figma.
              Maurental sets a new standard for convenience and efficiency in
              the world of car rentals, combining sleek aesthetics with
              intuitive functionality.
            </p>
            <a
              href="https://www.figma.com/file/pukITyPXyRhZqKAw8fLaIR/Maurental---Portfolio?type=design&node-id=1-55041&mode=design&t=v1TSmvbaLyIeaTn7-0"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.btn}>View</button>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.copy}>
              Explore a curated selection of visually stunning and user-friendly
              dashboard designs that cater to diverse industries and needs. From
              sleek and modern corporate dashboards to vibrant and data-driven
              analytics interfaces, my UI kit demonstrates a keen eye for design
              aesthetics and a deep understanding of user experience.
            </p>
            <a
              href="https://www.figma.com/file/wc3AnwuXBjfV5Wh86RGCJ4/Dashboards-UI-Kit?type=design&node-id=0-2319&mode=design&t=Sj65g0rDR6Hhd4UF-0"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.btn}>View</button>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.copy}>
              I created an cook recipes app with search feature and detail pages
              with React (Vite) and SCSS
            </p>
            <div className="flex gap-4">
              <a
                href="https://eatncook.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.btn}>Live</button>
              </a>
              <a
                href="https://github.com/ErgaAsDev/cmlabs-frontend-fulltime-test"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.btn}>Source</button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cards;
