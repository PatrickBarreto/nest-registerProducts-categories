import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest'
import { AppModule } from '../src/app.module';

type createdCategoryTest = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
};

describe('Test all category.controller routes',() => {
  let app: INestApplication;
  const BASE_PATH = '/categories/';
  
  let createdCategoryTest : createdCategoryTest; 
  let categoryName = "teste";
  let editedCategoryName = "teste edited";
  
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();
    
    app = moduleFixture.createNestApplication();
    await app.init()
  })


  it('Create new category (POST)', async () => {
    return request(app.getHttpServer())
    .post(BASE_PATH)
    .send({
      name:categoryName
    })
    .expect(201)
    .expect((res)=>{
      createdCategoryTest = res.body
    })
    .expect((res)=>{
      expect(res.body).toHaveProperty('name', categoryName)
    })
  });

  it('Return all categories (GET)', async () => {
    return request(app.getHttpServer())
    .get(BASE_PATH)
    .expect(200)
    .expect((res)=>{  
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.map((i: createdCategoryTest)=> {
        expect(i).toEqual(expect.objectContaining({
                                id: expect.any(Number),
                                name: expect.any(String),
                                createdAt: expect.any(String),
                                updatedAt: expect.any(String)
                              }
                            ))
      }))
    })
  });

  it('Return specific category (GET)', async () => {
    return request(app.getHttpServer())
    .get(BASE_PATH+createdCategoryTest.id)
    .expect(200)
    .expect((res)=>{  
      expect(typeof res.body).toBe('object');
      expect(res.body).toEqual(createdCategoryTest)
    })
  });

  it('Update a specific category (PATCH)', async () => {
    return request(app.getHttpServer())
    .patch(BASE_PATH+createdCategoryTest.id)
    .send({
      name:editedCategoryName
    })
    .expect((res)=>{
      expect(typeof res.body).toBe('object')
      expect(res.body).toEqual(
        {
          id:createdCategoryTest.id,
          name: editedCategoryName,
          createdAt: createdCategoryTest.createdAt,
          updatedAt: res.body.updatedAt
        }
      )
    })
  });

  it('Delete this category test (DELETE)', async () => {
    return request(app.getHttpServer())
    .delete(BASE_PATH+createdCategoryTest.id)
    .expect(204)
  });

});



