import { Module } from '@nestjs/common';
import { ItemStocksModule } from './item-stocks/item-stocks.module';
import { ItemsModule } from './items/items.module';
import { PricingModule } from './pricing/pricing.module';
import { PurchaseModule } from './purchase/purchase.module';
import { SellsModule } from './sells/sells.module';

@Module({
  imports: [
    ItemStocksModule,
    ItemsModule,
    PricingModule,
    PurchaseModule,
    SellsModule,
  ],
})
export default class EndpointModule {}
