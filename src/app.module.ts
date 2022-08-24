import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma/prisma.module';
import EndpointModule from './endpoints/endpoints.module';

@Module({
  imports: [EndpointModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
