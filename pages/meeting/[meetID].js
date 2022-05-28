import SingleMeeting from '../../components/SingleMeeting';
import { connectDb } from '../../utils/mongoose';
import Meeting from '../../models/Meeting';

const meeting = ({meeting}) => {
  return (
    <SingleMeeting meeting={meeting} />
  )
}

export default meeting

export async function getStaticPaths () {
  connectDb()
  const data = await Meeting.find({});

  const paths = data.map(item => ({params:{meetID: item.id}}))

  return({
    fallback: true,
    paths
  })
}

export async function getStaticProps (context) {
  connectDb()
  const data = await Meeting.findOne({ id: context.params.meetID });

  const meeting = {
    title: data.title,
    location: data.location,
    description: data.description,
    image: data.image,
  }

  return({
    props: 
      { meeting }
  })
}