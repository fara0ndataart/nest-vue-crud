import { IsString, IsEmail, IsDate, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsDate()
    @IsNotEmpty()
    birthDate: Date;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    pincode: string;
}

export class UpdateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsDate()
    birthDate: Date;

    @IsEmail()
    email: string;

    @IsString()
    gender: string;

    @IsString()
    country: string;

    @IsString()
    state: string;

    @IsString()
    city: string;

    @IsString()
    address: string;

    @IsString()
    pincode: string;
}
