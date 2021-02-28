import { Controller, Get } from '@nestjs/common';

@Controller('vianney')
export class VianneyController {
  @Get()
  test(): string {
    return 'Salut Vianney';
  }
}
