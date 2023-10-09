import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.order.findMany();
  }

  findOne(id: string) {
    return this.prismaService.order.findUniqueOrThrow({ where: { id } });
  }

  create(createOrderInput: CreateOrderInput) {
    const data = createOrderInput;

    return this.prismaService.order.create({ data });
  }

  update(id: string, updateOrderInput: UpdateOrderInput) {
    const data = updateOrderInput;

    return this.prismaService.order.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prismaService.order.delete({ where: { id } });
  }
}
