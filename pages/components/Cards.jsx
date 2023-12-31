import styles from "./cards.module.scss";
import Image from "next/image";
import stuffOne from "../images/Variant1.png";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

// //
const dataArray = [
  {
    id: 4,
    copy: "Experience the future of car rentals with Maurental, a groundbreaking application meticulously designed by me on Figma. Maurental sets a new standard for convenience and efficiency in the world of car rentals, combining sleek aesthetics with intuitive functionality.",
    viewButton: "View",
    linkFigma:
      "https://www.figma.com/file/pukITyPXyRhZqKAw8fLaIR/Maurental---Portfolio?type=design&node-id=1-55041&mode=design&t=v1TSmvbaLyIeaTn7-0",
  },

  {
    id: 2,
    copy: "Introducing Jobizz, the game-changing mobile app that transforms your job search into a dynamic and empowering journey.",
    viewButton: "View",
    linkFigma:
      "https://www.figma.com/file/KpUFwpgrmCj7PQtJHTLWxE/Jobizz---Portfolio?type=design&node-id=0-1&mode=design",
  },
  {
    id: 3,
    copy: "Mobility, the sleek e-commerce app I meticulously crafted on Figma, revolutionizes shopping. Seamlessly blending style and functionality, the app offers an immersive experience.",
    viewButton: "View",
    linkFigma:
      "https://www.figma.com/file/XYvODOSrV1LyxaKwjNLsL5/Mobility---Portfolio?type=design&node-id=1%3A7534&mode=design&t=z2j0WauznHppEv0P-1",
  },
  {
    id: 1,
    copy: "A responsive modern UI crypto landing page and dashboard.",
    viewButton: "View",
    liveButton: "Live",
    linkFigma:
      "https://www.figma.com/file/q1HfDdoZLdBv01x127OWLw/Cryptoon---Portfolio?type=design&node-id=0%3A1&mode=design&t=Bdi9vKbsZQoE2B9f-1",
    linkLive: "https://cryptoon-cryptopages.vercel.app/",
  },
  {
    id: 5,
    copy: "Explore a curated selection of visually stunning and user-friendly dashboard designs that cater to diverse industries and needs. From sleek and modern corporate dashboards to vibrant and data-driven analytics interfaces, my UI kit demonstrates a keen eye for design aesthetics and a deep understanding of user experience.",
    viewButton: "View",
    linkFigma:
      "https://www.figma.com/file/wc3AnwuXBjfV5Wh86RGCJ4/Dashboards-UI-Kit?type=design&node-id=0-2319&mode=design&t=Sj65g0rDR6Hhd4UF-0",
  },
  {
    id: 6,
    copy: "I created a cook recipes app with search feature and detail pages with React (Vite) and SCSS",
    liveButton: "Live",
    sourceButton: "Source",
    linkLive: "https://eatncook.netlify.app/",
    linkSource: "https://github.com/ErgaAsDev/cmlabs-frontend-fulltime-test",
  },
  // Add more objects for other cards here
];

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
        {dataArray.map((card) => {
          return (
            <div key={card.id} className={styles.card}>
              <div className={styles.content}>
                <p className={styles.copy}>{card.copy}</p>
                <div className="flex gap-5">
                  {card.viewButton && (
                    <a href={card.linkFigma} target="_blank" rel="noreferrer">
                      <button className={styles.btn}>{card.viewButton}</button>
                    </a>
                  )}
                  {card.liveButton && (
                    <a href={card.linkLive} target="_blank" rel="noreferrer">
                      <button className={styles.btn}>{card.liveButton}</button>
                    </a>
                  )}
                  {card.sourceButton && (
                    <a href={card.linkSource} target="_blank" rel="noreferrer">
                      <button className={styles.btn}>
                        {card.sourceButton}
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Cards;
