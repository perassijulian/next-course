import styles from '../styles/SingleMeeting.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const MeetingList = ({ info }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/meeting/${id}`)
  }

  return (
    <div className={styles.container}>
        
      {info.map(d => (
        <div className={styles.item} key={d.id}>
          <h1>{d.title}</h1>
          <Image
            src={d.image}
            alt='meeting place'
            width={600}
            height={400}
          />
          <h2>{d.location}</h2>
          <button onClick={() => handleClick(d.id)}>View meeting</button>
        </div>       
      ))}
    </div>
  )
}

export default MeetingList