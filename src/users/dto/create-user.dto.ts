import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsEmail({}, {message: 'Invalid email format'})
    readonly email: string;

    @IsString()
    @Length(4, 16, {message: 'Password length must be between 4 and 16 characters'})
    readonly password: string;
}