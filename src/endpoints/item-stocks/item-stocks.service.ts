import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import prismaSafeExecuteFunc from 'src/utils/prismaExceptionHandler';
import { CreateItemStockDto } from './dto/create-item-stock.dto';
import { UpdateItemStockDto } from './dto/update-item-stock.dto';

@Injectable()
export class ItemStocksService {
  constructor(private prisma: PrismaService) {}

  create(createItemStockDto: CreateItemStockDto) {
    return 'This action adds a new itemStock';
  }

  findAll() {
    return this.prisma.itemStock.findMany();
  }

  findOne(id: number) {
    return prismaSafeExecuteFunc(
      (prisma: PrismaService, params: any) => {
        return prisma.itemStock.findUnique({ where: { itemId: id } });
      },
      this.prisma,
      {},
    );
  }

  update(updateItemStockDto: UpdateItemStockDto) {
    const func = (
      prisma: PrismaService | any,
      updateItemStockDto: UpdateItemStockDto | any,
    ) => {
      return prisma.itemStock.update({
        where: { itemId: updateItemStockDto.itemId },
        data: updateItemStockDto,
      });
    };
    return prismaSafeExecuteFunc(func, this.prisma, updateItemStockDto);
  }

  remove(id: number) {
    return `This action removes a #${id} itemStock`;
  }
}
