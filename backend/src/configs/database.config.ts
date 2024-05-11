import {connect, ConnectOptions } from 'mongoose';

export const dbConnect = () => {
    connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    } as ConnectOptions).then(
        () => console.log("Connected to MongoDB"),
        (error) => console.log("Failed to connect to MongoDB", error)
    );
}
    