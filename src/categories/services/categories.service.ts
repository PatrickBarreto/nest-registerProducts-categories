import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoriesRepository } from '../repository/categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly repository: CategoriesRepository ){
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.repository.create(createCategoryDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.repository.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
