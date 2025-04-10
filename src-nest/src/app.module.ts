import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import User from './users/entities/user.entity';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
