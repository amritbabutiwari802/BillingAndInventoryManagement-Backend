import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import removeBulkInventory from './utils';

@Injectable()
export class SellsService {
  constructor(private prisma: PrismaService) {}

  async create(createSellDto: CreateSellDto) {
    const billInfo = { ...createSellDto };
    console.log(billInfo, 'billInfo');
    delete billInfo.data;
    const data = createSellDto.data;

    const bill = await this.prisma.bill.create({ data: billInfo });

    const CalculatedData = data.map((value) => ({ ...value, billId: bill.id }));
    const bulkInventory = data.map((value) => ({
      itemId: value.itemId,
      baseUnitQuantity: value.baseUnitQuantity,
      smallerUnitQuantity: value.smallerUnitQuantity,
    }));
    await this.prisma.purchaseHistory.createMany({ data: CalculatedData });
    await removeBulkInventory(bulkInventory, this.prisma);

    return { success: true, data: bill };
  }

  findAll() {
    return this.prisma.bill.findMany();
  }

  findOne(id: number) {
    return this.prisma.bill.findUnique({ where: { id } });
  }

  // update(id: number, updateSellDto: UpdateSellDto) {
  //   return `This action updates a #${id} sell`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} sell`;
  // }
}
