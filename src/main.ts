import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { PrismaNotFoundException } from './exception-filters/prisma-not-found.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Ativar globalmente vinha validação de dados com o class-validator 
  app.useGlobalPipes(new ValidationPipe());
  
  //Ativar globalmente minha classe de excessão do primsa para evitar erro 500 quando for uma bad request
  app.useGlobalFilters(new PrismaNotFoundException());
  
  //Atividar a quebra de conexões do Nest para as conexões do prisma assim que a aplicação encerrar o tempo de execução.
  app.enableShutdownHooks();

  await app.listen(3000);
}
bootstrap();