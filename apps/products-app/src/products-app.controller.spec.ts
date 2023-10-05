import { Test, TestingModule } from '@nestjs/testing';
import { ProductsAppController } from './products-app.controller';
import { ProductsAppService } from './products-app.service';

describe('ProductsAppController', () => {
  let productsAppController: ProductsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsAppController],
      providers: [ProductsAppService],
    }).compile();

    productsAppController = app.get<ProductsAppController>(ProductsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productsAppController.getHello()).toBe('Hello World!');
    });
  });
});
