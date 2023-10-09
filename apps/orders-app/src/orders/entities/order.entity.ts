import {
  Directive,
  Field,
  Float,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { OrderStatus, PaymentMethod } from '@prisma/client';

@ObjectType({ description: 'order model' })
@Directive('@key(fields: "id")')
export class Order {
  @Field(() => ID, { description: 'id of the order' })
  id: string;

  @Field(() => OrderStatus, {
    description: 'status of the order',
    defaultValue: OrderStatus.PENDING,
  })
  status?: OrderStatus;

  @Field(() => Float, { description: 'total amount of the order' })
  totalAmount: number;

  @Field({ description: 'shipping address of the order' })
  shippingAddress: string;

  @Field(() => PaymentMethod, { description: 'status of the order' })
  paymentMethod: PaymentMethod;
}

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
  description: 'status of the order',
  valuesMap: {
    PENDING: {
      description: 'order is pending',
    },
    SHIPPED: {
      description: 'order is shipped',
    },
    DELIVERED: {
      description: 'order is delivered',
    },
    CANCELLED: {
      description: 'order is cancelled',
    },
    RETURNED: {
      description: 'order is returned',
    },
  },
});

registerEnumType(PaymentMethod, {
  name: 'PaymentMethod',
  description: 'payment method of the order',
  valuesMap: {
    CREDIT_CARD: {
      description: 'credit card',
    },
    DEBIT_CARD: {
      description: 'debit card',
    },
    UPI: {
      description: 'upi',
    },
    NET_BANKING: {
      description: 'net banking',
    },
    CASH_ON_DELIVERY: {
      description: 'cash on delivery',
    },
  },
});
