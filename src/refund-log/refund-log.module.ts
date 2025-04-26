import { Module } from '@nestjs/common';
import { RefundLogController } from './refund-log.controller';
import { RefundLogService } from './refund-log.service';

@Module({
  controllers: [RefundLogController],
  providers: [RefundLogService],
})
export class RefundLogModule {}
