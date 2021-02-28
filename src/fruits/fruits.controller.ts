import { Controller, Get, Param, Redirect } from '@nestjs/common';

@Controller('fruits')
export class FruitsController {
  @Get()
  findAll(): string[] {
    return ['pomme', 'poire'];
  }

  @Get('docs')
  @Redirect('https://simple.wikipedia.org/wiki/List_of_fruits')
  redirect(): void {
    return;
  }

  @Get(':fruit')
  findOne(@Param('fruit') fruit: string) {
    return fruit;
  }
}
