import { IsEmail, MaxLength, MinLength } from "class-validator";

export class CreateFormateurDto {
    @MinLength(3,{message: 'nom is too shoort. min lengh is $constraint1 characters'})
    @MaxLength(255,{message: 'nom is too long. max lentgh is $constraint1 characters'})
    readonly nom: string;


    @MinLength(3,{message: 'prenom is too shoort. min lengh is $constraint1 characters'})
    @MaxLength(255,{message: 'prenom is too long. max lentgh is $constraint1 characters'})
    readonly prenom: string;

    @MaxLength(255,{message: 'specialite is too long. max lentgh is $constraint1 characters'})
    readonly specialite: string;


    @MaxLength(255,{message: 'experience is too long. max lentgh is $constraint1 characters'})
    readonly experience?: string;

    @IsEmail()
    readonly email: string;
}
