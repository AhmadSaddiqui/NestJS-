import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator';


export class CreateUserDto {
  @IsNotEmpty({ message: 'Username should not be empty' })
  @IsString({ message: 'Username must be a string' })
  @MinLength(4, { message: 'Username must be longer than or equal to 4 characters' })
  username: string;

  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail({}, { message: 'Email must be an email' })
  email: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
