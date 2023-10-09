import { NestFactory } from '@nestjs/core';
import { OrdersAppModule } from './orders-app.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersAppModule);

  await app.listen(3000);
}
bootstrap();
