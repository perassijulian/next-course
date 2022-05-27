import styles from '../styles/SingleMeeting.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const MeetingList = ({ title, image, location }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/meetup/${title}`)
  }

  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1>{title}</h1>
            <Image
              src={image}
              alt='meetup place'
              width={600}
              height={400}
            />
            <h2>{location}</h2>
            <button onClick={handleClick}>View meeting</button>
        </div>
    </div>
  )
}

export default MeetingList