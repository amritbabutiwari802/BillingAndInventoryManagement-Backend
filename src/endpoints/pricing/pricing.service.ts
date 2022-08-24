import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { UpdatePricingDto } from './dto/update-pricing.dto';

@Injectable()
export class PricingService {
  constructor(private prisma: PrismaService) {}
  // create(createPricingDto: CreatePricingDto) {
  //   return 'This action adds a new pricing';
  // }

  findAll() {
    return this.prisma.markedPrice.findMany();
  }

  findOne(itemId: number) {
    return this.prisma.markedPrice.findFirst({ where: { itemId: itemId } });
  }

  async update(itemId: number, updatePricingDto: UpdatePricingDto) {
    const result = await this.prisma.markedPrice.update({
      where: { itemId },
      data: updatePricingDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} pricing`;
  }
}
