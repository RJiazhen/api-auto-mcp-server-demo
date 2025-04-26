import { Injectable } from '@nestjs/common';
import { RefundLogDto } from './dto/refund-log.dto';
import { REFUND_LOGS } from './mock/refund-log.mock';

@Injectable()
export class RefundLogService {
  private readonly refundLogs: RefundLogDto[] = REFUND_LOGS;

  findByUserId(userId: number): RefundLogDto[] {
    return this.refundLogs.filter((log) => log.userId === userId);
  }

  findByRefundNumber(refundNumber: string): RefundLogDto | undefined {
    return this.refundLogs.find((log) => log.refundNumber === refundNumber);
  }

  findByOrderNumber(orderNumber: string): RefundLogDto[] {
    return this.refundLogs.filter((log) => log.orderNumber === orderNumber);
  }
}
