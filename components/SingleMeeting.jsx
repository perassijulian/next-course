import '../styles/SingleMeeting.module.css';
import Image from 'next/image';

const SingleMeeting = ({ id, title, image, location, description }) => {
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
            <p>{description}</p>
        </div>
    </div>
  )
}

export default SingleMeeting