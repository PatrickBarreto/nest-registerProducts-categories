import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, ParseIntPipe } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @HttpCode(201)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @HttpCode(200)
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.categoriesService.findOne(id);
  }

  @HttpCode(200)
  @Patch(':id')
  update(@Param('id', new ParseIntPipe()) id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.categoriesService.remove(id);
  }
}
