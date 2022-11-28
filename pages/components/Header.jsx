import Image from "next/image"
import headerLogo from "../images/headerLogo.png"



const Header = () => {
  return (
    <div className="relative flex flex-col items-center mt-20">
        <div className="flex items-center gap-3" id="logo">
            <Image 
            src={headerLogo}
            />
            <h1 className="text-6xl md:text-8xl text-[#5ED600] font-bold">cultigo</h1>
        </div>
        <h2 className="text-sm text-[#525252] md:text-base mt-1 font-semibold">Cultivation of Technology</h2>
        <h2 className="text-lg md:text-xl text-[#525252] mt-[36px] mb-[12px] font-semibold">It's Time to Cultivate your Skills in Tech</h2>
        <div className="flex gap-1 text-2xl md:text-4xl font-semibold">
            <span className="text-[#525252]">Become Professional</span> 
            <ul className="text-[#5ED600] h-[32px] md:h-[44px] overflow-x-hidden overflow-y-hidden" id="text-slide">
                <li><span>Data Scientist</span></li>
                <li><span>Data Analyst</span></li>
                <li><span>ML Engineer</span></li>
                <li><span>Programmer</span></li>
            </ul>
        </div>
        <button className="bg-[#5ED600] p-2 rounded-lg mt-[62px] text-white hover:opacity-80"><a href="">Explore Programs</a></button>
        <h2 className="text-lg md:text-xl text-[#525252] text-center mt-[80px] font-semibold">“Insightful, Trustworthy, and Real-project Online Class for everyone.” - Bill Gates</h2>
        <div id="scroll-icon">
          <i id='arrow'></i>
        </div>
    </div>
  )
}

export default Header