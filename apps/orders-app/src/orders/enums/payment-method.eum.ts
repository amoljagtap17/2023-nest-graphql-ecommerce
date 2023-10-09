import { registerEnumType } from '@nestjs/graphql';
import { PaymentMethod } from '@prisma/client';

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
