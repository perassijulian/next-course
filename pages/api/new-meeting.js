import Meeting from "../../models/Meeting";
import { connectDb } from "../../utils/mongoose";

connectDb();

export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {
            const exists = await Meeting.findOne({id: req.body.id})
            if (!exists) {
                const newMeeting = new Meeting(req.body)
                const savedMeeting = await newMeeting.save();
                res.status(201).json(savedMeeting)
            } else {
                res.status(201).json({status: 'meeting title duplicated'})
                console.log('meeting duplicated')
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({status: error})
        }
    } else {
        res.status(400).json(`Method: ${req.method} not supported on this endpoint`)
    }
}