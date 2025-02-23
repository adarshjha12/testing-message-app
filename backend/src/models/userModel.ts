import mongoose from 'mongoose'

type User = {
    email?: string
    mobileNo?: number
}

const userSchema = new mongoose.Schema<User>({
    email: {
        type: String,
        unique: true,
        trim: true
    },
    mobileNo: {
        type: String,
        unique: true,
        trim: true
    },
})

export const UserModel = mongoose.model<User & mongoose.Document>('User', userSchema)