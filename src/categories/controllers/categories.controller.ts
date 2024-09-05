import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, ParseIntPipe } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @HttpCode(201)
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoriesService.create(createCategoryDto);
  }

  @HttpCode(200)
  @Get()
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @HttpCode(200)
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return await this.categoriesService.findOne(id);
  }

  @HttpCode(200)
  @Patch(':id')
  async update(@Param('id', new ParseIntPipe()) id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return await this.categoriesService.update(id, updateCategoryDto);
  }

  @HttpCode(204)
  @Delete(':id')
  async remove(@Param('id', new ParseIntPipe()) id: number) {
    return await this.categoriesService.remove(id);
  }
}
