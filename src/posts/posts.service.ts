import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
//apis y metodos

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post)
        private postModel: typeof Post,
    ) { }
    async create(data: { name: string; description: string }) {
        return this.postModel.create(data);
    }

    async findAll() {
        return this.postModel.findAll();
    }

    async delete(id: number) {
        const post = await this.postModel.findByPk(id);
        if (!post) return null;
        await post.destroy();
        return post;
    }
}
