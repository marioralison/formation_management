import { Schema } from "mongoose";

export const StudentSchema = new Schema({
    lastname: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true 
    },
    date_of_birth: {
        type: Date,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    old: {
        type: Number,
        require: true 
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