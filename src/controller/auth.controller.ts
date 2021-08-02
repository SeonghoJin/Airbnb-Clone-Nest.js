import {
  Controller,
  Delete,
  Post,
  Res,
  Req,
  Request,
  Response,
  Body,
} from '@nestjs/common';
import { SingUpRequestDto } from 'src/dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  login() {
    console.log(1);
  }

  @Post('sign-up')
  signUp(@Body() signUpRequestDto: SingUpRequestDto) {
    console.log(signUpRequestDto);
  }

  @Post('sign-in')
  signIn() {
    console.log(3);
  }

  @Delete('logout')
  logout() {
    console.log(4);
  }
}
