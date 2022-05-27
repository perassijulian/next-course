import styles from  '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href='/'>
            <a><span className={styles.logo}>JULI</span></a>
        </Link>
        <ul className={styles.list}>
            <Link href='/portfolio'>
                <a><li className={styles.item}>PORTFOLIO</li></a>
            </Link>
            <Link href='/blog'>
               <a><li className={styles.item}>BLOG</li></a>
            </Link>
            <Link href='/code'>
                <a><li className={styles.item}>CODE</li></a>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar