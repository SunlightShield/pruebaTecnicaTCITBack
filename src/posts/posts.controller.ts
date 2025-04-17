import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts') // <- ¡esto define la ruta base!
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() body: { name: string; description: string }) {
    return this.postsService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(Number(id));
  }
}
