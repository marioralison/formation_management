import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Transforme les chaînes en objets Date ou autres types
  }));
  app.enableCors({
    origin: configuration().origin,
    allowedHeaders: ['Content-Type', 'Authorization']
  })
  await app.listen(configuration().port,() => {
    console.log(`server running on http://localhost:${configuration().port}`);
  });
}
bootstrap();
