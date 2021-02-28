import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello M. Marques!';
  }
  getGoodBye(): string {
    return 'Goodbye World!';
  }
}
