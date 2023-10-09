import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: string) {
    return this.prismaService.product.findUniqueOrThrow({ where: { id } });
  }

  create(createProductInput: CreateProductInput) {
    const data = createProductInput;

    return this.prismaService.product.create({ data });
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    const data = updateProductInput;

    return this.prismaService.product.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prismaService.product.delete({ where: { id } });
  }

  async getProductsForOrder(orderId: string) {
    const data = await this.prismaService.orderProduct.findMany({
      where: { orderId },
      include: { product: true },
    });

    return data;
  }
}
