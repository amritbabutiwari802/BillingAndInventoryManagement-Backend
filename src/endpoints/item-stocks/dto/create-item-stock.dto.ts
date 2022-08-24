import { ApiProperty } from '@nestjs/swagger';

interface xp {
  name: {
    same: string;
    data: { data: number }[];
  };
}

class PInterface {
  @ApiProperty()
  name: string;

  @ApiProperty()
  value: number[];
}

class NInterface {
  @ApiProperty()
  data: PInterface;
}

export class CreateItemStockDto {
  @ApiProperty()
  data: NInterface;
}
