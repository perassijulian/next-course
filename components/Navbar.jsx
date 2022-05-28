import styles from  '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href='/'>
            <a><span className={styles.logo}>JULI</span></a>
        </Link>
        <ul className={styles.list}>
            <Link href='/'>
            <a><li className={styles.item}>MEETINGS</li></a>
            </Link>
            <Link href='/add-meeting'>
                <a><li className={styles.item}>ADD</li></a>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar