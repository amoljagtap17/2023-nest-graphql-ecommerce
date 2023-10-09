import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  CANCELLED,
  RETURNED,
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
