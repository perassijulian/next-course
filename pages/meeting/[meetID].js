import SingleMeeting from '../../components/SingleMeeting';
import { MongoClient } from 'mongodb';

const meeting = ({meeting}) => {
  return (
    <SingleMeeting meeting={meeting} />
  )
}

export default meeting

export async function getStaticPaths () {
  const client = await MongoClient .connect("mongodb+srv://julian:julian123@cluster0.dhn1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  const db = client.db();
  const meetingsCollection = db.collection('meetings')
  const data = await meetingsCollection.find({}).toArray();
  client.close()

  const paths = data.map(item => ({params:{meetID: item.id}}))

  return({
    fallback: true,
    paths
  })
}

export async function getStaticProps (context) {
  const client = await MongoClient .connect("mongodb+srv://julian:julian123@cluster0.dhn1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  const db = client.db();
  const meetingsCollection = db.collection('meetings')
  const data = await meetingsCollection.findOne({ id: context.params.meetID })
  client.close()

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