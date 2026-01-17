import { IsNumber, IsString, IsOptional } from "class-validator";

export class BanUserDto {
    @IsNumber({}, {message: 'User ID must be a number'})
    readonly userId: number;

    @IsString({message: 'Ban reason must be a string'})
    readonly banReason: string;
}