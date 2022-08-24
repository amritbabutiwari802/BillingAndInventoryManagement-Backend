import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemStocksService } from './item-stocks.service';
import { CreateItemStockDto } from './dto/create-item-stock.dto';
import { UpdateItemStockDto } from './dto/update-item-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Item-Stock')
@Controller('item-stocks')
export class ItemStocksController {
  constructor(private readonly itemStocksService: ItemStocksService) {}

  @Get()
  findAll() {
    return this.itemStocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemStocksService.findOne(+id);
  }

  // @Patch()
  // update(@Body() updateItemStockDto: UpdateItemStockDto) {
  //   return this.itemStocksService.update(updateItemStockDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.itemStocksService.remove(+id);
  // }
}
