import { Module } from '@nestjs/common';
import { OrderLogController } from './order-log.controller';
import { OrderLogService } from './order-log.service';

@Module({
  controllers: [OrderLogController],
  providers: [OrderLogService],
})
export class OrderLogModule {}
