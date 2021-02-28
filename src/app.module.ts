import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitsModule } from './fruits/fruits.module';

@Module({
  imports: [FruitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
