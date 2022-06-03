import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from './database/entities/service.entity';
import {
  CreateServiceBody,
  ListServiceResponse,
  ServiceDetailResponse,
} from './interfaces/services.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly serviceRepo: Repository<ServiceEntity>,
  ) {}
  async createService(body: CreateServiceBody): Promise<ServiceDetailResponse> {
    const roleTransaction = this.serviceRepo.create({ ...body });
    /*
     * splitting the transaction and commit in two steps.
     * This would allow any other checks or transactions to take place if need be.
     * Perhaps overkill for this implementation, but wanted to demostrate a more realistic implemenation.
     */
    return this.serviceRepo.save(roleTransaction);
  }

  async listServices(): Promise<ListServiceResponse> {
    const services = await this.serviceRepo
      .createQueryBuilder('service')
      .getMany();

    return new ListServiceResponse(services);
  }
}
