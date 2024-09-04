import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesRepository } from './categories.repository';
import { PrismaService } from '../../prisma/prisma.service';


describe('CategoriesRepository', () => {
  let repository: CategoriesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesRepository, PrismaService]
    }).compile();

    repository = module.get<CategoriesRepository>(CategoriesRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
