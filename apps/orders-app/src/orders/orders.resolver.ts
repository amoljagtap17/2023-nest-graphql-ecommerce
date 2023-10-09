import {
  Args,
  ID,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Mutation(() => Order)
  updateOrder(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateOrderInput') updateOrderInput: UpdateOrderInput,
  ) {
    return this.ordersService.update(id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => ID }) id: string) {
    return this.ordersService.remove(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Order {
    return this.ordersService.findOne(reference.id) as unknown as Order;
  }
}
