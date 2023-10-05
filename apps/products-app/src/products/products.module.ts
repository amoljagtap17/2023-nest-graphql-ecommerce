import { PrismaService } from '@app/prisma';
import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  providers: [ProductsResolver, ProductsService, PrismaService],
})
export class ProductsModule {}
