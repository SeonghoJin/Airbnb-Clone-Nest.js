import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join, resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);;
  app.useStaticAssets(join(resolve(), '/src/client'), {
    prefix: '/static',
  });
  app.useStaticAssets(join(resolve(), '/src/client'), {
    prefix: '/client',
  });
  await app.listen(3000);
}
bootstrap();
