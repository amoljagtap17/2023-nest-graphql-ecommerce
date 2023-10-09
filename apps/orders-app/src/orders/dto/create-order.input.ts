import { Field, Float, InputType } from '@nestjs/graphql';
import { PaymentMethod } from '@prisma/client';

@InputType()
export class CreateOrderInput {
  @Field(() => Float, { description: 'total amount of the order' })
  totalAmount: number;

  @Field({ description: 'shipping address of the order' })
  shippingAddress: string;

  @Field(() => PaymentMethod, { description: 'status of the order' })
  paymentMethod: PaymentMethod;
}
