import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly Prisma: PrismaService ){

  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.Prisma.category.create({
      data:createCategoryDto
    });
  }

  findAll() {
    return this.Prisma.category.findMany();
  }

  findOne(id: number) {
    return this.Prisma.category.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.Prisma.category.update({
      where: {
        id: id
      },
      data: updateCategoryDto
    });
  }

  delete(id: number) {
    return this.Prisma.category.delete({
      where: {
        id: id
      }
    });
  }
}
