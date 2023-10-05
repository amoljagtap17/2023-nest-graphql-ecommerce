import { NestFactory } from '@nestjs/core';
import { ProductsAppModule } from './products-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsAppModule);
  await app.listen(3000);
}
bootstrap();
