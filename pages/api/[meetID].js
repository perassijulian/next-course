import Meeting from "../../models/Meeting";
import { connectDb } from "../../utils/mongoose";

connectDb();

export default async function handler(req, res) {
    switch (req.method) {
        case "PUT":
            try {
                const updatedMeeting = await Meeting.findOneAndUpdate({id : req.query.meetID},
                    {
                        $set: req.body
                    }, {new: true});
                if (!updatedMeeting) return res.status(400).json("Meeting not found"); 
                return res.status(200).json(updatedMeeting)
            } catch (error) {
                return res.status(400).json(error.message)
            }
        case "DELETE":
            try {
                const deletedMeeting = await Meeting.findOneAndDelete({id : req.query.meetID})
                if (!deletedMeeting) return res.status(400).json("Meeting not found"); 
                return res.status(200).json('Meeting deleted')
            } catch (error) {
                return res.status(400).json(error.message)
            }
        default:
            return res.status(400).json(`Method: ${req.method} not supported on this endpoint`)
    }
};