import { Schema, model, models } from 'mongoose';

const MeetingSchema = new Schema({
    title: { type: String, required: true, unique: true },
    id: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

export default models.Meeting || model("Meeting", MeetingSchema)