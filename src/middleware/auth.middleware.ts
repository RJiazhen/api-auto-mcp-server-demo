import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authCookie = req.cookies?.auth;

    if (!authCookie) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Unauthorized - No auth cookie found',
      });
    }

    next();
  }
}
