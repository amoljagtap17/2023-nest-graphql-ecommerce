import { PrismaService } from '@app/prisma';
import { Module } from '@nestjs/common';
import { OrdersResolver } from './order.resolver';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  providers: [ProductsResolver, OrdersResolver, ProductsService, PrismaService],
})
export class ProductsModule {}
