import { PrismaService } from 'src/database/prisma/prisma.service';

interface Item {
  itemId: number;
  baseUnitQuantity: number;
  smallerUnitQuantity: number;
}

const addBulkInventory = async (items: Item[], prisma: PrismaService) => {
  items.forEach(async (item) => {
    const inventory = await prisma.itemStock.findUnique({
      where: { itemId: item.itemId },
    });
    const item_fetched = await prisma.item.findUnique({
      where: { id: item.itemId },
    });
    if (inventory !== undefined && item_fetched !== undefined) {
      let baseUnitSum = 0;
      let smallerUnitSum =
        inventory.smallUnitQuantity + item.smallerUnitQuantity;
      if (smallerUnitSum >= item_fetched.conversionRatio) {
        baseUnitSum =
          item.baseUnitQuantity +
          inventory.baseUnitQuantity +
          Math.floor(smallerUnitSum / item_fetched.conversionRatio);
        smallerUnitSum =
          smallerUnitSum -
          Math.floor(smallerUnitSum / item_fetched.conversionRatio) *
            item_fetched.conversionRatio;
      } else {
        baseUnitSum = item.baseUnitQuantity + inventory.baseUnitQuantity;
      }
      await prisma.itemStock.update({
        where: { itemId: item.itemId },
        data: {
          baseUnitQuantity: baseUnitSum,
          smallUnitQuantity: smallerUnitSum,
        },
      });
    }
  });
};

export default addBulkInventory;
