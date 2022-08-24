import { Test, TestingModule } from '@nestjs/testing';
import { ItemStocksService } from './item-stocks.service';

describe('ItemStocksService', () => {
  let service: ItemStocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemStocksService],
    }).compile();

    service = module.get<ItemStocksService>(ItemStocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
