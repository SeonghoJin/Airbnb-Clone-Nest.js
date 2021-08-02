import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join, resolve } from 'path';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    this.appService = appService;
  }

  @Get('/')
  root(@Res() response: Response) {
    response.sendFile(join(resolve(), '/src/client/index.html'));
  }
}
