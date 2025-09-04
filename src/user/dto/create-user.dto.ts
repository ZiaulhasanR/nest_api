import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsNumber,
    MinLength,
    IsBoolean,
    Matches
} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @IsString()
    @Matches(/^(?=.*[0-9])/, {
        message: 'Password must contain at least one number',
    })
    readonly password: string;

    // @IsNotEmpty()
    // @IsNumber()
    // age: string;

    // @IsBoolean()
    // isActive: boolean;
}   
