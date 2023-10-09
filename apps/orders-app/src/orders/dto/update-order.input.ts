import { Field, InputType, PartialType } from '@nestjs/graphql';
import { OrderStatus } from '@prisma/client';
import { CreateOrderInput } from './create-order.input';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => OrderStatus, { description: 'status of the order' })
  status: OrderStatus;
}
