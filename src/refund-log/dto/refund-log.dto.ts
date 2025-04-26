import { ApiProperty } from '@nestjs/swagger';

export class RefundLogDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'ORD-2024-001' })
  orderNumber: string;

  @ApiProperty({ example: 'RFD-2024-001' })
  refundNumber: string;

  @ApiProperty({ example: 2499.99 })
  refundAmount: number;

  @ApiProperty({ example: 'Product defective' })
  reason: string;

  @ApiProperty({ example: 'approved' })
  status: 'pending' | 'approved' | 'rejected';

  @ApiProperty({ example: new Date() })
  refundDate: Date;

  @ApiProperty({ example: 'Full refund for defective product' })
  notes?: string;
}
