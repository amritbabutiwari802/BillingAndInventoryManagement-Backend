import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import PrismaExceptionHandler from 'src/utils/ExceptionHandlerClass';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService extends PrismaExceptionHandler {
  constructor(private prisma: PrismaService) {
    super();
  }

  create(createItemDto: CreateItemDto) {
    return this.prismaSafeExecute(
      this.createService,
      this.prisma,
      createItemDto,
    );
  }

  findAll() {
    return this.prisma.item.findMany();
  }

  findOne(id: number) {
    return this.prisma.item.findFirst({ where: { id } });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.item.update({ where: { id }, data: updateItemDto });
  }

  remove(id: number) {
    return this.prisma.item.delete({ where: { id } });
  }

  async createService(prisma: PrismaService, createItemDto: CreateItemDto) {
    const item = await prisma.item.create({ data: createItemDto });
    await prisma.itemStock.create({ data: { itemId: item.id } });
    await prisma.markedPrice.create({ data: { itemId: item.id } });
    return { data: item };
  }
}
