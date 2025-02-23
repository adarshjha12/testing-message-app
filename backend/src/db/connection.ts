import mongoose from "mongoose"

console.log('+++++++++', process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is required')
}
const mongoUri : string = process.env.MONGO_URI

export const connectDb = async function () {
    try {
        await mongoose.connect(mongoUri)
        console.log('db connected successfully');
        
    } catch (error) {
        console.log('error connecting db', error);
        
    }
}