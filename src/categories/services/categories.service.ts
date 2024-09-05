import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoriesRepository } from '../repository/categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly repository: CategoriesRepository){
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.repository.create(createCategoryDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.repository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
