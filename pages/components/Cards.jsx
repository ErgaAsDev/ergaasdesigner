import styles from './cards.module.scss'
import Image from 'next/image'
import stuffOne from '../images/Stuff1.png'

const Cards = () => {
  return (
    <div className='z-20'>
        <div className='flex items-center justify-center'>
            <h1 className='w-[100%] h-[80px] md:h-[120px] flex items-center justify-center text-2xl md:text-4xl text-[#5ed600] font-bold'>Explore Programs</h1>
        </div>
        <main className={styles.pagecontent}>
            <div className={styles.card}>
                <div className={styles.content}>
                <h2 className={styles.title}>Data Analyst</h2>
                <p className={styles.copy}>Gather data and retrieve a valuable information through spreadsheet, data visualization, and statistic.</p>
                <button className={styles.btn}>View Program</button>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.content}>
                <h2 className={styles.title}>Data Scientist</h2>
                <p className={styles.copy}>Top 1% data scientist with statistic, data visualization, and machine learning.</p>
                <button className={styles.btn}>View Program</button>
                </div>
            </div>
            
        </main>

    </div>
  )
}

export default Cards