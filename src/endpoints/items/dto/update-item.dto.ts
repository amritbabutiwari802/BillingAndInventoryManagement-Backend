import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  subName?: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  company?: string;

  @ApiProperty({ required: false })
  baseUnit?: string;

  @ApiProperty({ required: false })
  smallUnit?: string;

  @ApiProperty({ required: false })
  conversionRatio?: number;

  @ApiProperty({ required: false })
  tag?: string[];

  @ApiProperty({ required: false })
  type?: string[];

  @ApiProperty({ required: false })
  category?: string[];

  @ApiProperty({ required: false })
  imagePath?: string;
}
