import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateItemStockDto } from './create-item-stock.dto';

export class UpdateItemStockDto {
  @ApiProperty()
  itemId: number;

  @ApiProperty()
  baseUnitQuantity: number;

  @ApiProperty()
  smallUnitQuantity: number;
}
