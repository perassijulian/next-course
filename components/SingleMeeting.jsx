import styles from '../styles/SingleMeeting.module.css';
import Image from 'next/image';

const SingleMeeting = ({ meeting }) => {
  return (
    <div className={styles.container}>
          <div className={styles.item}>
            <h1>{meeting.title}</h1>
            <Image
            src={meeting.image}
            alt='meetup place'
            width={600}
            height={400}
            />
            <h2>{meeting.location}</h2>
            <p>{meeting.description}</p>
        </div>
    </div>
  )
}

export default SingleMeeting