import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.orderProduct.deleteMany({});

  const product1 = await prisma.product.create({
    data: {
      name: 'Macbook Pro 16',
      price: 3000,
      description: 'The best laptop ever',
      sku: 'macbook-pro-16',
      stockQuantity: 10,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'iPhone 12 Pro',
      price: 1200,
      description: 'The best phone ever',
      sku: 'iphone-12-pro',
      stockQuantity: 10,
    },
  });

  await prisma.order.create({
    data: {
      shippingAddress: '123 Main St',
      paymentMethod: 'CASH_ON_DELIVERY',
      totalAmount: 4200,
      products: {
        create: [
          {
            productId: product1.id,
            quantity: 2,
          },
          {
            productId: product2.id,
            quantity: 1,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
