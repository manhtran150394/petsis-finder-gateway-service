import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  GLOBAL_ROOT_PREFIX,
  SWAGGER_DESCRIPTION,
  SWAGGER_TITLE,
} from '../constants';
import * as path from 'path';

export async function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(
    path.join(GLOBAL_ROOT_PREFIX, 'documentation'),
    app,
    document,
    {
      swaggerOptions: {
        showCommonExtensions: true,
        showExtensions: true,
      },
    },
  );
}
