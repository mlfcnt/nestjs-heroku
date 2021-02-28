import { Test, TestingModule } from '@nestjs/testing';
import { VianneyController } from './vianney.controller';

describe('Vianney Controller', () => {
  let controller: VianneyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VianneyController],
    }).compile();

    controller = module.get<VianneyController>(VianneyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
