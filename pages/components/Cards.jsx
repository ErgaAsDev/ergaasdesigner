import styles from "./cards.module.scss";
import Image from "next/image";
import stuffOne from "../images/Variant1.png";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { dataArray } from "../data";

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
