import { Document } from "mongoose";

export interface IStudent extends Document {
    readonly lastname: string;
    readonly firstname: string;
    readonly date_of_birth: string;
    readonly email: string;
    readonly old: number;
}

