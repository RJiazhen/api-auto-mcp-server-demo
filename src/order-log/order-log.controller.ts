import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderLogService } from './order-log.service';
import { OrderDto } from './dto/order.dto';

@ApiTags('orders')
@Controller('orders')
export class OrderLogController {
  constructor(private readonly orderLogService: OrderLogService) {}

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all orders for a specific user' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns all orders for the user',
    type: [OrderDto],
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  getOrdersByUserId(@Param('userId') userId: string): OrderDto[] {
    const orders = this.orderLogService.findByUserId(Number(userId));
    if (orders.length === 0) {
      throw new NotFoundException(`No orders found for user ${userId}`);
    }
    return orders;
  }

  @Get(':orderNumber')
  @ApiOperation({ summary: 'Get order by order number' })
  @ApiParam({ name: 'orderNumber', description: 'Order number' })
  @ApiResponse({
    status: 200,
    description: 'Returns the order details',
    type: OrderDto,
  })
  @ApiResponse({ status: 404, description: 'Order not found' })
  getOrderByNumber(@Param('orderNumber') orderNumber: string): OrderDto {
    const order = this.orderLogService.findByOrderNumber(orderNumber);
    if (!order) {
      throw new NotFoundException(`Order ${orderNumber} not found`);
    }
    return order;
  }
}
