import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [OrdersModule, HealthModule],
  controllers: [],
  providers: [],
})
export class OrdersAppModule {}
