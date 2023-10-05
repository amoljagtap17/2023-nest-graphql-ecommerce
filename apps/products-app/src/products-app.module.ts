import { Module } from '@nestjs/common';
import { ProductsAppController } from './products-app.controller';
import { ProductsAppService } from './products-app.service';

@Module({
  imports: [],
  controllers: [ProductsAppController],
  providers: [ProductsAppService],
})
export class ProductsAppModule {}
