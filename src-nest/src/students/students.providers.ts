import { Mongoose } from "mongoose";
import { StudentSchema } from "./schema/student.schema";

export const studentProviders = [
    {
        provide: 'STUDENT_MODEL',
        useFactory: (mongoose: Mongoose ) => mongoose.model('Students',StudentSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];