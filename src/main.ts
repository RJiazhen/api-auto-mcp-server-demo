import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable cookie parsing
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('NestJS Demo API')
    .setDescription('The NestJS Demo API description')
    .setVersion('1.0')
    .addCookieAuth('auth', {
      type: 'apiKey',
      in: 'cookie',
      name: 'auth',
      description:
        'Authentication cookie. Required for all endpoints except Swagger UI.',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const openApiFilePath = join(__dirname, 'openapi.json');
  // Save the OpenAPI specification to a file
  writeFileSync(openApiFilePath, JSON.stringify(document, null, 2));

  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      withCredentials: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
