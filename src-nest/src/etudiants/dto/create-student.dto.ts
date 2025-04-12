import { IsDate, IsEmail, IsInt, IsISO8601, MaxLength, MinLength } from "class-validator";

export class CreateStudentDto {
    @IsInt({message: "numero IsNaN"})
    readonly numero: number;

    @MinLength(3,{message: 'nom is too shoort. min lengh is $constraint1 characters'})
    @MaxLength(255,{message: 'nom is too long. max lentgh is $constraint1 characters'})
    readonly nom: string;


    @MinLength(3,{message: 'prenom is too shoort. min lengh is $constraint1 characters'})
    @MaxLength(255,{message: 'prenom is too long. max lentgh is $constraint1 characters'})
    readonly prenom: string;

    @IsISO8601() // (ex. 2002-11-01)
    readonly date_naissance: Date | string;

    @IsEmail()
    readonly email: string;
}
