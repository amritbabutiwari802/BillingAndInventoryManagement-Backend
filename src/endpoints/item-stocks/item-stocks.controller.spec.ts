import { Test, TestingModule } from '@nestjs/testing';
import { ItemStocksController } from './item-stocks.controller';
import { ItemStocksService } from './item-stocks.service';

describe('ItemStocksController', () => {
  let controller: ItemStocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemStocksController],
      providers: [ItemStocksService],
    }).compile();

    controller = module.get<ItemStocksController>(ItemStocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
