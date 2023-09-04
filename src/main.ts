import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectToDatabase } from './database/database.init';

async function bootstrap() {
  await connectToDatabase();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
