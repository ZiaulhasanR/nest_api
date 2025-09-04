import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsArray,
  ValidateIf,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @ValidateIf((o: { password: string }) => o.password !== undefined)
  @IsString()
  password?: string;

}
