import { connect, connection } from 'mongoose';

const conn = {
    connected: false
}

export async function connectDb() {
    connection.on("connected", () => {
        console.log('Connected to MongoDB')
        conn.connected = 1;
    })

    if (!(conn.connected)) {
        const db = await connect("mongodb+srv://julian:julian123@cluster0.dhn1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        conn.connected = (db.connections[0].readyState);
        console.log('connecting to mongo')
    }

    connection.on("error", (err) => {
        console.log('Connection to MongoDB failed: ', err)
    })
}

