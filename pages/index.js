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
  const dummyInfo = [
    {
      id: 'id1',
      title: 'this is the first meeting',
      location: 'first location',
      image: 'https://a.storyblok.com/f/58806/1164x784/20ee327044/berlin_city_01_skyline_unsplash.jpeg',
      description: 'description from the first meeting',
    },
    {
      id: 'id2',
      title: 'this is the second meeting',
      location: 'second location',
      image: 'https://a.storyblok.com/f/58806/1164x784/20ee327044/berlin_city_01_skyline_unsplash.jpeg',
      description: 'description from the second meeting',
    },
  ]

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

  console.log(meetings)

  return({
    props:{
      meetings
    }
  })
}