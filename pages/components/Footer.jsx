import styles from './socmed.module.css'
import Image from 'next/image'
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import linkedin from '../images/linkedin.png'
import discord from '../images/discord.png'
import github from '../images/github.png'




const Footer = () => {
  return (
    <div>
        <div className={styles.body} id="social-media">
        <div>
            <h2 className='text-[#fff] text-xl mt-5 '>Keep connected with us</h2>
        </div>
        <ul className={styles.wrapper}>
            <li className={`${styles.icon} ${styles.linkedin}`}>
                <span className={styles.tooltip}>Linkedin</span>
                <span><i className="fab fa-linkedin-f"><Image src={linkedin}/></i></span>
            </li>
            <li className={`${styles.icon} ${styles.telegram}`}>
                <span className={styles.tooltip}>Telegram</span>
                <span><i className="fab fa-twitter"><Image src={telegram}/></i></span>
            </li>
            <li className={`${styles.icon} ${styles.instagram}`}>
                <span className={styles.tooltip}>Instagram</span>
                <span><i className="fab fa-instagram"><Image src={instagram}/></i></span>
            </li>
            <li className={`${styles.icon} ${styles.github}`}>
                <span className={styles.tooltip}>Github</span>
                <span><i className="fab fa-github"></i><Image src={github}/></span>
            </li>
            <li className={`${styles.icon} ${styles.discord}`}>
                <span className={styles.tooltip}>Discord</span>
                <span><i className="fab fa-discord"><Image src={discord}/></i></span>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Footer