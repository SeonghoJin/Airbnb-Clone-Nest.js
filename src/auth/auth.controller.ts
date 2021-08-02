import {
  Controller,
  Delete,
  Post,
  Res,
  Req,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogoutRequestDto, SignInRequestDto } from './dto';
import { SignUpRequestDto } from './dto';
import { Response } from 'express';
import { join, resolve } from 'path';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    this.authService = authService;
  }

  @Post('sign-up')
  signUp(@Body() signUpRequestDto: SignUpRequestDto) {
    const { id, password } = signUpRequestDto;
    const user = this.authService.singUp(id, password);
    if (user == null) {
      return null;
    }
    return user;
  }

  @Post('sign-in')
  signIn(@Body() signInRequestDto: SignInRequestDto) {
    const { id, password } = signInRequestDto;
    const user = this.authService.signIn(id, password);
    if (user == null) {
      return null;
    }
    return user;
  }

  @Delete('logout/:id')
  logout(@Res() response: Response, @Param('id') id) {
    this.authService.logout(id);
    return null;
  }
}
