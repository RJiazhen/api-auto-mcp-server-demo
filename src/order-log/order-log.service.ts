import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { ORDERS } from './mock/order.mock';

@Injectable()
export class OrderLogService {
  // @ts-ignore
  private readonly orders: OrderDto[] = ORDERS;

  findByUserId(userId: number): OrderDto[] {
    return this.orders.filter((order) => order.userId === userId);
  }

  findByOrderNumber(orderNumber: string): OrderDto | undefined {
    return this.orders.find((order) => order.orderNumber === orderNumber);
  }
}
