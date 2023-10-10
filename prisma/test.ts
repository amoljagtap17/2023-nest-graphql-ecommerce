import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /* const data = await prisma.order.findUnique({
    where: {
      id: 'efe87bfe-6068-415a-87a9-c74d5173f80f',
    },
    select: {
      products: {
        include: {
          product: true,
        },
      },
    },
  }); */

  const data = await prisma.orderProduct.findMany({
    where: {
      orderId: 'efe87bfe-6068-415a-87a9-c74d5173f80f',
    },
    select: {
      product: true,
    },
  });

  const _data = data.map((item) => item.product);

  console.log('data::', _data);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
