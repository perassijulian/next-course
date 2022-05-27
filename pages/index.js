import styles from '../styles/Home.module.css';
import Image from 'next/image';
import MeetingList from '../components/MeetingList';
import { MongoClient } from 'mongodb';


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
  const client = await MongoClient .connect("mongodb+srv://julian:julian123@cluster0.dhn1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  const db = client.db();
  const meetingsCollection = db.collection('meetings')
  const data = await meetingsCollection.find({}).toArray();

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