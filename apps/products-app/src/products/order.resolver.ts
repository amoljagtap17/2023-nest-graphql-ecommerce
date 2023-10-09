import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Order } from './entities/order.entity';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly productsService: ProductsService) {}

  @ResolveField((of) => [Product])
  public products(@Parent() order: Order) {
    return this.productsService.getProductsForOrder(order.id);
  }
}
