import { Test, TestingModule } from '@nestjs/testing';
import { FruitsController } from './fruits.controller';

describe('Fruits Controller', () => {
  let fruitController: FruitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitsController],
    }).compile();

    fruitController = module.get<FruitsController>(FruitsController);
  });

  it('should be defined', () => {
    expect(fruitController).toBeDefined();
  });

  describe('root', () => {
    it('should return a list of fruits', () => {
      expect(fruitController.findAll()).toStrictEqual(['pomme', 'poire']);
    });
  });

  describe(':fruits', () => {
    it('should return the param', () => {
      expect(fruitController.findOne('poire')).not.toBe('pomme');
      expect(fruitController.findOne('pomme')).toBe('pomme');
    });
  });
});
