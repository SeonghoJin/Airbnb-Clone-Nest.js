import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRespository } from '../database/UserRespository';
import { Session } from '../session';
import { AuthController } from './auth.controller';
@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, UserRespository, Session],
})
export class AuthModule {}
