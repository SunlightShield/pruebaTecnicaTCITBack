import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '5852',
    database: 'post_db',
    autoLoadModels: true,
    synchronize: true,
  }), PostsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
