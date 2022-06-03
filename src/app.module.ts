import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ServiceEntity } from './database/entities/service.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([ServiceEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
