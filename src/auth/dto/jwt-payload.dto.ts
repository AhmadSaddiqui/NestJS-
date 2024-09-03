import { IsString, IsNumber } from 'class-validator';

export class JwtPayloadDto {
  @IsString()
  readonly username: string;

  @IsNumber()
  readonly userId: number;
}
