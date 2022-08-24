import { HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

export default async function prismaSafeExecuteFunc(
  func: (prisma: PrismaService, params?: any) => any,
  prisma: PrismaService,
  params?: any,
) {
  try {
    let result = undefined;
    if (params === undefined) {
      result = await func(prisma);
    } else {
      result = await func(prisma, params);
    }
    return { success: true, resposne: result };
  } catch (e) {
    console.error(e, 'prisma error');
    throw new HttpException('Internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
