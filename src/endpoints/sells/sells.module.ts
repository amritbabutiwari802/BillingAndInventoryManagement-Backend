import { Module } from '@nestjs/common';
import { SellsService } from './sells.service';
import { SellsController } from './sells.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';

@Module({
  controllers: [SellsController],
  providers: [SellsService],
  imports: [PrismaModule],
})
export class SellsModule {}
