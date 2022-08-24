import { Injectable } from '@nestjs/common';
import { Item } from 'src/endpoints/items/entities/item.entity';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import addBulkInventory from './utils';

@Injectable()
export class PurchaseService {
  constructor(private prisma: PrismaService) {}

  // for purchase bills
  async create(createPurchaseDto: CreatePurchaseDto) {
    const billInfo = { ...createPurchaseDto };
    console.log(billInfo, 'billInfo');
    delete billInfo.data;
    const data = createPurchaseDto.data;
    console.log(createPurchaseDto, 'data');
    const bill = await this.prisma.purchaseBill.create({ data: billInfo });

    const CalculatedData = data.map((value) => ({ ...value, billId: bill.id }));
    const bulkInventory = data.map((value) => ({
      itemId: value.itemId,
      baseUnitQuantity: value.baseUnitQuantity,
      smallerUnitQuantity: value.smallerUnitQuantity,
    }));
    await this.prisma.purchaseHistory.createMany({ data: CalculatedData });
    await addBulkInventory(bulkInventory, this.prisma);

    return { success: true };
  }

  //find all purchase bill
  findAll() {
    return this.prisma.purchaseBill.findMany();
  }

  //find one purchase bill
  findOne(id: number) {
    return this.prisma.purchaseBill.findFirst({ where: { id } });
  }

  //updata one purchase bill
  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return `This action updates a #${id} purchase`;
  }

  //delete one purchase bill
  async remove(id: number) {
    return (
      (await this.prisma.purchaseBill.deleteMany()) &&
      (await this.prisma.purchaseHistory.deleteMany())
    );
  }

  //get all items purchased under a purchaseBill
  findBillItems(billId: number) {
    return this.prisma.purchaseHistory.findMany({ where: { billId: billId } });
  }
}
