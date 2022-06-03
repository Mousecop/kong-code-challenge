import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ServiceEntity } from './entities/service.entity';

export const connectionOptions: TypeOrmModuleOptions = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'test',
  database: 'kong_services',
  logging: 'all',
  synchronize: true, //Would NOT have this in production, instead using migrations
  entities: [ServiceEntity],
};

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions)],
})
export class DatabaseModule {}
