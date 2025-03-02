import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(passport.initialize());
  // app.use(passport.session());
  app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

  await app.listen(3000);
}
bootstrap();
