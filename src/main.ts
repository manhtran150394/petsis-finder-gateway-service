import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './shared/swagger';
import { APP_DEFAULT_PORT } from './shared/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await setupSwagger(app);

  await app.listen(APP_DEFAULT_PORT || process.env.APP_PORT);
}
bootstrap();
