import { PrismaService } from 'src/database/prisma/prisma.service';

interface Item {
  itemId: number;
  baseUnitQuantity: number;
  smallerUnitQuantity: number;
}

export default function removeBulkInventory(
  items: Item[],
  prisma: PrismaService,
) {
  items.forEach(async (item) => {
    const inventory = await prisma.itemStock.findUnique({
      where: { itemId: item.itemId },
    });
    const item_fetched = await prisma.item.findUnique({
      where: { id: item.itemId },
    });
    if (inventory !== undefined && item_fetched !== undefined) {
      const remainingQuantity =
        inventory.baseUnitQuantity * item_fetched.conversionRatio +
        inventory.smallUnitQuantity -
        item.baseUnitQuantity * item_fetched.conversionRatio -
        item.smallerUnitQuantity;

      const baseQuantity = Math.floor(
        remainingQuantity / item_fetched.conversionRatio,
      );
      const smallQuantity =
        remainingQuantity - baseQuantity * item_fetched.conversionRatio;

      await prisma.itemStock.update({
        where: { itemId: item.itemId },
        data: {
          baseUnitQuantity: baseQuantity,
          smallUnitQuantity: smallQuantity,
        },
      });
    }
  });
}
