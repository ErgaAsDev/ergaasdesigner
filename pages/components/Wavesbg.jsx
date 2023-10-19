import styles from "./icon.module.css";
import { BiCubeAlt } from "react-icons/bi";
import { BiSolidSmile } from "react-icons/bi";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { PiPaperPlaneRightDuotone } from "react-icons/pi";

const Wavesbg = ({ hexColor, animate }) => {
  return (
    <div className="mt-[120px]">
      <BiCubeAlt
        size={80}
        className={`absolute left-[60px] md:left-[170px] ${
          !animate && "hidden"
        }`}
        id={animate ? styles.icon : ""}
        color={hexColor}
      />

      <PiPaperPlaneRightDuotone
        size={50}
        className={`absolute left-[-40px] top-[50px] ${!animate && "hidden"}`}
        id={animate ? styles.iconPlane : ""}
        color={hexColor}
      />

      <BsFillHandThumbsUpFill
        size={40}
        className={`absolute right-[120px] md:right-[300px] ${
          !animate && "hidden"
        }`}
        id={animate ? styles.iconSmile : ""}
        color={hexColor}
      />

      <div className="">
        <svg
          id="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
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
      </div>
    </div>
  );
};

export default Wavesbg;
