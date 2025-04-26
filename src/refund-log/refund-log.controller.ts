import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RefundLogService } from './refund-log.service';
import { RefundLogDto } from './dto/refund-log.dto';

@ApiTags('refunds')
@Controller('refunds')
export class RefundLogController {
  constructor(private readonly refundLogService: RefundLogService) {}

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all refunds for a specific user' })
  @ApiParam({
    name: 'userId',
    required: true,
    description: 'User ID',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Return all refunds for the user.',
    type: [RefundLogDto],
  })
  @ApiResponse({
    status: 404,
    description: 'No refunds found for user',
  })
  findByUserId(@Param('userId') userId: string): RefundLogDto[] {
    const refunds = this.refundLogService.findByUserId(Number(userId));
    if (refunds.length === 0) {
      throw new NotFoundException(`No refunds found for user ${userId}`);
    }
    return refunds;
  }

  @Get('order/:orderNumber')
  @ApiOperation({ summary: 'Get refunds by order number' })
  @ApiParam({
    name: 'orderNumber',
    required: true,
    description: 'Order number',
    example: 'ORD-2024-001',
  })
  @ApiResponse({
    status: 200,
    description: 'Return refunds for the order.',
    type: [RefundLogDto],
  })
  @ApiResponse({
    status: 404,
    description: 'No refunds found for order',
  })
  findByOrderNumber(@Param('orderNumber') orderNumber: string): RefundLogDto[] {
    const refunds = this.refundLogService.findByOrderNumber(orderNumber);
    if (refunds.length === 0) {
      throw new NotFoundException(`No refunds found for order ${orderNumber}`);
    }
    return refunds;
  }

  @Get(':refundNumber')
  @ApiOperation({ summary: 'Get refund by refund number' })
  @ApiParam({
    name: 'refundNumber',
    required: true,
    description: 'Refund number',
    example: 'RFD-2024-001',
  })
  @ApiResponse({
    status: 200,
    description: 'Return refund details.',
    type: RefundLogDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Refund not found',
  })
  findByRefundNumber(
    @Param('refundNumber') refundNumber: string,
  ): RefundLogDto {
    const refund = this.refundLogService.findByRefundNumber(refundNumber);
    if (!refund) {
      throw new NotFoundException(`Refund ${refundNumber} not found`);
    }
    return refund;
  }
}
