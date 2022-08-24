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

export class CreateSellDto {
  @ApiProperty()
  customerName: string;

  @ApiProperty()
  customerPan: string;

  @ApiProperty()
  totalAmount: number;

  @ApiProperty()
  sellingPrice: number;

  @ApiProperty()
  discount: number;

  @ApiProperty()
  remarks: string;

  @ApiProperty({
    type: Item,
    isArray: true,
  })
  data: Item[];
}

// model Bill{
//   id  Int @id @default(autoincrement())
//   totalAmount Float
//   discount    Float
//   sellingPrice Float
//   remarks String?
//   date    DateTime @default(now())
//    customerName  String
//   customerPan   String?
// }
