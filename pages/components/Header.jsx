import Image from "next/image";
import headerLogo from "../images/headerLogo.png";
import { BiWorld } from "react-icons/bi";

const Header = ({ hexColor, generateRandomColor }) => {
  return (
    <div className="relative flex flex-col items-center mt-20">
      <div className="flex items-center gap-3" id="logo">
        {/* <Image src={headerLogo} /> */}
        <h1
          className={`text-4xl md:text-6xl font-bold`}
          style={{ color: `${hexColor}` }}
        >
          Erlangga S Kurnia
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <h2 className="text-lg md:text-xl text-[#525252] mt-[36px] mb-[36px] font-semibold">
          Welcome to a glimpse of my world !
        </h2>
        <BiWorld size={30} color={hexColor} className="animate-bounce" />
      </div>
      <div className="flex gap-1 text-2xl md:text-4xl font-semibold">
        <span className="text-[#525252] mr-1">I am a</span>
        <ul
          className="h-[32px] md:h-[44px] overflow-x-hidden overflow-y-hidden"
          style={{ color: `${hexColor}` }}
          id="text-slide"
        >
          <li>
            <span>UIUX Designer</span>
          </li>
          <li>
            <span>UIUX Engineer</span>
          </li>
          <li>
            <span>Product Designer</span>
          </li>
          <li>
            <span>Dreamer</span>
          </li>
        </ul>
      </div>
      <button
        className="p-2 rounded-lg mt-[62px] text-white hover:opacity-80"
        style={{ backgroundColor: `${hexColor}` }}
        onClick={generateRandomColor}
      >
        <span>Don't Click !</span>
      </button>
      <h2 className="text-lg md:text-xl text-[#525252] text-center mt-[80px] font-semibold">
        “Design is not just what it looks like and feels like. Design is how it
        works.” - Steve Jobs
      </h2>
    </div>
  );
};

export default Header;
