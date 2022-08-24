import { Module } from '@nestjs/common';
import { ItemStocksService } from './item-stocks.service';
import { ItemStocksController } from './item-stocks.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';

@Module({
  controllers: [ItemStocksController],
  providers: [ItemStocksService],
  imports: [PrismaModule],
})
export class ItemStocksModule {}
