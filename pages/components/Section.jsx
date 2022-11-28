import { useInView } from 'react-intersection-observer';
import styles from "./section.module.css"
import Image from 'next/image';
import sectionOne from '../images/section1.svg'
import sectionSecond from '../images/section2.svg'
import sectionThird from '../images/section3.svg'
import sectionFourth from '../images/section4.svg'
import stuffOne from '../images/Stuff1.png'



const Section = () => {
  const { ref: firstSection, inView } = useInView({
    
  });
  const { ref: secondSection, inView: secondView } = useInView({
    
  });
  const { ref: thirdSection, inView: thirdView } = useInView({
    
  });
  const { ref: fourthSection, inView: fourthView } = useInView({
    
  });
  return (
    <div className='flex flex-col items-center mt-10'>
      <h1 className='h-[80px] md:h-[120px] w-[100%] -z-20 bg-[#3AD232] flex items-center justify-center text-4xl text-[#FFF] font-bold mb-7'>Why us ?</h1>
      <div className='flex flex-col gap-[120px] items-center'>
      <div className='flex flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-center md:gap-[100px]'>
        <div ref={firstSection} className={`${styles.cardHiddenLeft} ${inView ? styles.cardShowLeft : ""}`}>
          <h2 className='w-[320px] md:w-[400px] md:text-2xl text-center text-[#5ED600] font-semibold'>Live Classes by Industry Experts</h2>
          <h2 className='w-[320px] md:w-[400px] md:text-xl'>Experienced experts in the industry will teach you in the following courses. You will learn everything from beginner to the most advanced concepts. <a href=''><span className='text-[#5ED600]'>Read more</span></a> </h2>
        </div>
        <Image 
        src={sectionOne}
        className={`w-[240px] md:w-[360px] ${styles.cardHiddenRight} ${inView ? styles.cardShowRight : ""}`}/>
      </div>
      <div className='flex flex-col items-center justify-center mt-5 md:flex md:flex-row md:items-center md:justify-center md:gap-[100px]'>
        <Image 
        src={sectionSecond}
        className={`w-[240px] md:w-[360px] ${styles.cardHiddenLeft} ${secondView ? styles.cardShowLeft : ""}`}/>
        <div ref={secondSection} className={`${styles.cardHiddenRight} ${secondView ? styles.cardShowRight : ""}`}>
          <h2 className='w-[320px] md:w-[400px] md:text-2xl text-center text-[#5ED600] font-semibold'>Build Your Portfolio</h2>
          <h2 className='w-[320px] md:w-[400px] md:text-xl'>Not only in the class training, but also you will learn to build complex and real-world projects as your prove of study.</h2>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-5 md:flex md:flex-row md:items-center md:justify-center md:gap-[100px]'>
        <div ref={thirdSection} className={`${styles.cardHiddenLeft} ${thirdView ? styles.cardShowLeft : ""}`}>
          <h2 className='w-[320px] md:w-[400px] md:text-2xl text-center text-[#5ED600] font-semibold'>Grow Your Network</h2>
          <h2 className='w-[320px] md:w-[400px] md:text-xl'>Community in Cultigo has uniques people, you can collaborate one and another to foster your learning.</h2>
        </div>
        <Image 
        src={sectionThird}
        className={`w-[240px] md:w-[360px] ${styles.cardHiddenRight} ${thirdView ? styles.cardShowRight : ""}`}/>
      </div>
      <div className='flex flex-col items-center justify-center mt-5 md:flex md:flex-row md:gap-[100px] '>
        <Image 
        src={sectionFourth}
        className={`w-[240px] md:w-[360px] ${styles.cardHiddenLeft} ${fourthView ? styles.cardShowLeft : ""}`}/>
        <div ref={fourthSection} className={`${styles.cardHiddenRight} ${fourthView ? styles.cardShowRight : ""}`}>
          <h2 className='w-[320px] md:w-[400px] md:text-2xl text-center text-[#5ED600] font-semibold'>Get Hired</h2>
          <h2 className='w-[320px] md:w-[400px] md:text-xl'>Preparing you to get the knowledge, confidence, experience you need to face an interview and receive offers from any company.</h2>
        </div>
      </div>
      <div className=''>
            <Image 
            src={stuffOne} 
            className="hidden -z-10 xl:w-[1257px] xl:block xl:absolute xl:left-[140px] xl:top-[725px] min-[1540px]:left-[250px] min-[1540px]:top-[760px] min-[2048px]:left-[400px] min-[2048px]:top-[780px]"/>
      </div>
    </div>
    </div>
    
  )
}

export default Section