import { Controller, Get } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('openapi')
export class OpenapiController {
  @Get()
  getOpenApiSpec() {
    try {
      const openApiFilePath = join(process.cwd(), 'dist', 'openapi.json');
      const spec = readFileSync(openApiFilePath, 'utf8');
      return JSON.parse(spec);
    } catch (error) {
      return {
        error: 'OpenAPI specification not found',
        message: error.message,
      };
    }
  }
}
