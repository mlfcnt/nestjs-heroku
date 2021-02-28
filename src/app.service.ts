import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getGoodBye(): string {
    return 'Goodbye World!';
  }
}
