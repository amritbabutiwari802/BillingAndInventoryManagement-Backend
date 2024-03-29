import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports: [PrismaModule],
})
export class ItemsModule {}
