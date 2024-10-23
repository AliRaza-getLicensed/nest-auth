import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1', { exclude: ['cats'] });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
