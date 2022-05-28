import styles from '../styles/Home.module.css';
// import Image from 'next/image';
import MeetingList from '../components/MeetingList';
import { connectDb } from '../utils/mongoose';
import Meeting from '../models/Meeting';


export default function Home({meetings}) {

  return (
      <div className={styles.container}>
        <div className={styles.main}>
            <MeetingList info={meetings}/>
        </div>
      </div>
    )
}

export async function getStaticProps() {
  connectDb();

  const data = await Meeting.find({});
  
  const meetings = data.map(meeting => ({
    id: meeting.id,
    title: meeting.title,
    location: meeting.location,
    description: meeting.description,
    image: meeting.image,
  }))

  return({
    props:{
      meetings
    }
  })
}