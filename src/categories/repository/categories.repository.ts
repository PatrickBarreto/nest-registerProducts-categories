import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly Prisma: PrismaService ){

  }

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.Prisma.category.create({
      data:createCategoryDto
    });
  }

  async findAll() {
    return await this.Prisma.category.findMany();
  }

  async findOne(id: number) {
    return await this.Prisma.category.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.Prisma.category.update({
      where: {
        id: id
      },
      data: updateCategoryDto
    });
  }

  async delete(id: number) {
    return await this.Prisma.category.delete({
      where: {
        id: id
      }
    });
  }
}
