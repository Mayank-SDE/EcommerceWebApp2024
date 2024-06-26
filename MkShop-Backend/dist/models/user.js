import mongoose from 'mongoose';
import validator from 'validator';
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, 'Please enter the id'],
    },
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Please enter Name'],
        validate: validator.default.isEmail,
    },
    name: {
        type: String,
        required: [true, 'Please enter Name'],
    },
    photo: {
        type: String,
        required: [true, 'Please enter photo'],
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: [true, 'Please enter your Gender'],
    },
    dob: {
        type: Date,
        required: [true, 'Please enter your Date of Birth'],
    },
}, {
    timestamps: true,
});
schema.virtual('age').get(function () {
    const today = new Date();
    const dob = this.dob; // this refers to the current user
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() === dob.getDate())) {
        age--;
    }
    return age;
});
export const User = mongoose.model('User', schema);
