import { ApiProperty } from '@nestjs/swagger';

export class OrderItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  orderId: number;

  @ApiProperty()
  itemName: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;
}
