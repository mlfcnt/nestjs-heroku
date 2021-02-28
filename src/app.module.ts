import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitsModule } from './fruits/fruits.module';
import { VianneyController } from './vianney/vianney.controller';

@Module({
  imports: [FruitsModule],
  controllers: [AppController, VianneyController],
  providers: [AppService],
})
export class AppModule {}
