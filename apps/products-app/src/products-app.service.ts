import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
