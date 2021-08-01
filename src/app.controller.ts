import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join, resolve } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  root(@Res() response: Response) {
    return response.sendFile(join(resolve(), '/src/client/index.html'));
  }
}
