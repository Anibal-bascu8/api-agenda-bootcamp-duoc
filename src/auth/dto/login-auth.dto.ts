// import { ApiProperty } from '@nestjs/swagger/dist';
import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  contrasena: string;
}
