import { Field, Float, InputType } from '@nestjs/graphql';
import { PaymentMethod } from '@prisma/client';

@InputType()
class OrderProductInput {
  @Field({ description: 'id of the product' })
  productId: string;

  @Field({ description: 'quantity of the product' })
  quantity: number;
}

@InputType()
export class CreateOrderInput {
  @Field(() => Float, { description: 'total amount of the order' })
  totalAmount: number;

  @Field({ description: 'shipping address of the order' })
  shippingAddress: string;

  @Field(() => PaymentMethod, { description: 'status of the order' })
  paymentMethod: PaymentMethod;

  @Field(() => [OrderProductInput], { description: 'products of the order' })
  products: OrderProductInput[];
}
