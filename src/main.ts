import { NestFactory } from '@nestjs/core';
import { CatalogoModule } from './catalogo.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(CatalogoModule);

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('CatalogoAvon API')
    .setDescription('Este API se utiliza para la realizacion del examen final, usando catalogo Avon de Mongo')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-catalogoAvon', app, document);

  await app.listen(3000);
}
bootstrap();
