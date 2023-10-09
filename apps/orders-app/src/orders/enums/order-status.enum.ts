import { registerEnumType } from '@nestjs/graphql';
import { OrderStatus } from '@prisma/client';

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
