import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { PricingController } from './pricing.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';

@Module({
  controllers: [PricingController],
  providers: [PricingService],
  imports: [PrismaModule],
})
export class PricingModule {}
