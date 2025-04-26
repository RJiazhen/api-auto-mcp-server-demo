import { ApiProperty } from '@nestjs/swagger';
import { OrderItemDto } from './order-item.dto';

export class OrderDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  orderNumber: string;

  @ApiProperty()
  totalAmount: number;

  @ApiProperty()
  purchaseDate: Date;

  @ApiProperty({ type: [OrderItemDto] })
  items: OrderItemDto[];
}
