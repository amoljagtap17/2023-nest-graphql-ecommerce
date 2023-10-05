import { Controller, Get } from '@nestjs/common';
import { ProductsAppService } from './products-app.service';

@Controller()
export class ProductsAppController {
  constructor(private readonly productsAppService: ProductsAppService) {}

  @Get()
  getHello(): string {
    return this.productsAppService.getHello();
  }
}
