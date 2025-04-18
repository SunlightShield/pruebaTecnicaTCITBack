import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post)
        private postModel: typeof Post,
    ) { }
    async create(data: { name: string; description: string }) {
        if (!data.name || !data.description) {
            throw new BadRequestException('Los campos nombre y descripcion son obligatorios');
          }
        return this.postModel.create(data);
    }

    async findAll() {
        return this.postModel.findAll();
    }

    async delete(id: number) {
        const post = await this.postModel.findByPk(id);
        if (!post) {
            throw new NotFoundException(`No se encontró el post con el id requuerido ${id}`);
          }
        await post.destroy();
        return post;
    }
}
