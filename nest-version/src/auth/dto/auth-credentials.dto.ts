import { IsString, MinLength, MaxLength, Matches } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(25)
    username : string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    // @Matches(
    //     /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, // harusnya dilakukan oleh browser
    //     { message: 'password to weak' }) // regex
    password : string;
}