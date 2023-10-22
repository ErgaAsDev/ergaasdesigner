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
