import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePricingDto } from './create-pricing.dto';

export class UpdatePricingDto extends PartialType(CreatePricingDto) {
  @ApiProperty()
  itemId: number;

  @ApiProperty()
  rate: number;
}
