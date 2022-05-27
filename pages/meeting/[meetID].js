import SingleMeeting from '../../components/SingleMeeting';

const meeting = ({meeting}) => {
  return (
    <SingleMeeting meeting={meeting} />
  )
}

export default meeting

export function getStaticPaths () {
  return({
    fallback: true,
    paths:[
      {params:{
        meetID: 'id1'
      }},
      {params:{
        meetID: 'id2'
      }},
    ]
  })
}

export function getStaticProps () {
  const meetingInfo= {
      id: 'id1',
      title: 'this is the first meeting',
      location: 'first location',
      image: 'https://a.storyblok.com/f/58806/1164x784/20ee327044/berlin_city_01_skyline_unsplash.jpeg',
      description: 'description from the first meeting',
  }

  return({
    props: 
      { meeting: meetingInfo}
  })
}