import { ApiProperty } from '@nestjs/swagger';

class Item {
  @ApiProperty()
  itemId: number;

  @ApiProperty()
  baseUnitQuantity: number;

  @ApiProperty()
  smallerUnitQuantity: number;

  @ApiProperty()
  rate: number;
}

export class CreatePurchaseDto {
  @ApiProperty()
  dealerName: string;

  @ApiProperty()
  dealerPan: string;

  @ApiProperty()
  billNo: number;

  @ApiProperty()
  totalMarkedPrice: number;

  @ApiProperty()
  totalCostPrice: number;

  @ApiProperty()
  totalDiscount: number;

  @ApiProperty()
  date: Date;

  @ApiProperty({ type: Item, isArray: true })
  data: Item[];
}

// model PurchaseBill{
//   id Int @id @default(autoincrement())
//   dealerPan String
// dealerName
//   purchaseDate DateTime
//   billNo Int
//   markedPrice Float
//   totalCostPrice Float
//   totalDiscount Float
// }

//   itemId  Int

//   baseUnitQuantity Int
//   smallerUnitQuantity Int
//   rate Float
