import { PrismaService } from '@app/prisma';
import { Module } from '@nestjs/common';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';

@Module({
  providers: [OrdersResolver, OrdersService, PrismaService],
})
export class OrdersModule {}
