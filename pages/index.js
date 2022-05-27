import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {

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

  return (
      <div className={styles.container}>
        <div className={styles.main}>
          {dummyInfo.map(d => (
            <div className={styles.item} key={d.id}>
              <h1>{d.title}</h1>
              <Image
                src={d.image}
                alt='meetup place'
                width={600}
                height={400}
              />
              <h2>{d.location}</h2>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
}
