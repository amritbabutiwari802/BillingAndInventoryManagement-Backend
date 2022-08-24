import { PrismaService } from 'src/database/prisma/prisma.service';

export default class PrismaExceptionHandler {
  constructor() {}
  async prismaSafeExecute(
    func: (prisma: PrismaService, params: any) => any,
    prisma: PrismaService,
    params: any,
  ) {
    try {
      const result = await func(prisma, params);
      return { success: true, respone: result };
    } catch (e) {
      console.error(e, 'prisma error');
      return { success: false };
    }
  }
}
