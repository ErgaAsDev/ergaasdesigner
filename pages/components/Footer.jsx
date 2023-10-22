import styles from "./socmed.module.css";
import Image from "next/image";
import instagram from "../images/instagram.png";
import dribble from "../images/dribble.png";
import linkedin from "../images/linkedin.png";
import discord from "../images/discord.png";
import github from "../images/github.png";

const Footer = ({ hexColor }) => {
  return (
    <div>
      <svg
        id="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
        className="absolute"
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
      <div
        className={styles.body}
        id="social-media"
        style={{ backgroundColor: `${hexColor}` }}
      >
        <div>
          <h2 className="text-[#fff] text-xl mt-5 ">Keep connected with me</h2>
        </div>
        <ul className={styles.wrapper}>
          <li className={`${styles.icon} ${styles.linkedin}`}>
            <span className={styles.tooltip}>Linkedin</span>
            <span>
              <a
                href="https://www.linkedin.com/in/erlangga-septa-kurnia-15262a1b9/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-f">
                  <Image src={linkedin} alt="linkedin" />
                </i>
              </a>
            </span>
          </li>
          <li className={`${styles.icon} ${styles.telegram}`}>
            <span className={styles.tooltip}>Dribbble</span>
            <span>
              <a
                href="https://dribbble.com/ergastyle"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter">
                  <Image src={dribble} alt="dribble" />
                </i>
              </a>
            </span>
          </li>
          <li className={`${styles.icon} ${styles.github}`}>
            <span className={styles.tooltip}>Github</span>
            <span>
              <a
                href="https://github.com/ErgaAsDev"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github">
                  <Image src={github} alt="github" />
                </i>
              </a>
            </span>
          </li>
        </ul>

        <h2 className="text-[#fff] mt-7">
          Designed and developed with 🎨 by Me{" "}
        </h2>
      </div>
    </div>
  );
};

export default Footer;
