import { Schema } from "mongoose";

export const StudentSchema = new Schema({
    lastname: String,
    firstname: {
        type: String,
        required: true 
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    old: {
        type: Number,
        required: true 
    }
}, {
    virtuals: {
        fullName: {
            get() {
                return this.lastname + ' ' + this.firstname
            }
        }
    }
})