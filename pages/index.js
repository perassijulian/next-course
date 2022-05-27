import styles from '../styles/Home.module.css';
import Image from 'next/image';
import MeetingList from '../components/MeetingList';

export default function Home({meetings}) {

  return (
      <div className={styles.container}>
        <div className={styles.main}>
            <MeetingList info={meetings}/>
        </div>
      </div>
    )
}

export function getStaticProps() {
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

  return({
    props:{
      meetings: dummyInfo
    }
  })
}