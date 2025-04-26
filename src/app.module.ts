import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenapiModule } from './openapi/openapi.module';
import { UsersModule } from './users/users.module';
import { OrderLogModule } from './order-log/order-log.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { RefundLogModule } from './refund-log/refund-log.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OpenapiModule,
    UsersModule,
    OrderLogModule,
    MiddlewareModule,
    RefundLogModule,
  ],
})
export class AppModule {}
