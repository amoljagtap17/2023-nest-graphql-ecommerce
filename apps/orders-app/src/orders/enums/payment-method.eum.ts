import { registerEnumType } from '@nestjs/graphql';

export enum PaymentMethod {
  CREDIT_CARD,
  DEBIT_CARD,
  UPI,
  NET_BANKING,
  CASH_ON_DELIVERY,
}

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
