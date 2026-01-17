import { IsString, IsNotEmpty, Length } from "class-validator";

export class CreateRoleDto {
    @IsString({message: 'Value must be a string'})
    @IsNotEmpty({message: 'Value is required'})
    @Length(2, 50, {message: 'Value must be between 2 and 50 characters'})
    readonly value: string;

    @IsString({message: 'Description must be a string'})
    @IsNotEmpty({message: 'Description is required'})
    @Length(5, 255, {message: 'Description must be between 5 and 255 characters'})
    readonly description: string;
}