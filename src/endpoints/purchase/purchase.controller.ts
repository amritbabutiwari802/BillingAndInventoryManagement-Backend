import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PurchaseBill')
@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    console.log(createPurchaseDto, 'createpurchasedto');
    return this.purchaseService.create(createPurchaseDto);
  }

  @Get()
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.purchaseService.findOne(+id);
  }

  @Get('findBillItems/:id')
  findBillItems(@Param('id') billId: string) {
    console.log(typeof billId);
    if (!Number(billId)) {
      throw new HttpException('bad parameter', HttpStatus.BAD_REQUEST);
    }

    return this.purchaseService.findBillItems(parseInt(billId));
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePurchaseDto: UpdatePurchaseDto,
  // ) {
  //   return this.purchaseService.update(+id, updatePurchaseDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseService.remove(+id);
  }
}
