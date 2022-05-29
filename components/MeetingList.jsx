import styles from '../styles/MeetingList.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const MeetingList = ({ info }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
        
      {info.map(d => (
        <div className={styles.item} key={d.id}>
          <h1>{d.title}</h1>
          <img
            className={styles.img}
            src={d.image}
            alt='meeting place'
          />
          <h2 className={styles.address}>{d.location}</h2>
          <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={() => router.push(`/meeting/${d.id}`)}>View meeting</button>
            <button className={styles.button} onClick={() => router.push(`/meeting/${d.id}/edit`)}>Edit meeting</button>
          </div>       
        </div>       
      ))}
    </div>
  )
}

export default MeetingList