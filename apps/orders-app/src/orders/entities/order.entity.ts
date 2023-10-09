import { Directive, Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { OrderStatus } from '../enums/order-status.enum';
import { PaymentMethod } from '../enums/payment-method.eum';

@ObjectType({ description: 'order model' })
@Directive('@key(fields: "id")')
export class Order {
  @Field(() => ID, { description: 'id of the order' })
  id: string;

  @Field(() => OrderStatus, { description: 'status of the order' })
  status: OrderStatus;

  @Field(() => Float, { description: 'total amount of the order' })
  totalAmount: number;

  @Field({ description: 'shipping address of the order' })
  shippingAddress: string;

  @Field(() => PaymentMethod, { description: 'status of the order' })
  paymentMethod: PaymentMethod;
}
