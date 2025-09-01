import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsNumber,
    MinLength,
    IsBoolean
} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsNumber()
    age: string;

    @IsBoolean()
    isActive: boolean;
}   
