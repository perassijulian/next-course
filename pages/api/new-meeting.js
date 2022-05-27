import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {
            const client = await MongoClient.connect("mongodb+srv://julian:julian123@cluster0.dhn1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
            const db = client.db();
            const meetingsCollection = db.collection('meetings')
            const exists = await meetingsCollection.findOne({id: req.body.id})
            if (!exists) {
                await meetingsCollection.insertOne(req.body)
                res.status(201).json({status: 'meeting added'})
            } else {
                res.status(201).json({status: 'meeting title duplicated'})
                console.log('meeting duplicated')
            }
            client.close()
        } catch (error) {
            console.log(error)
            res.status(400).json({status: error})
        }
    }
}