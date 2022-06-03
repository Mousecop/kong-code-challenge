import { ServiceEntity } from 'src/database/entities/service.entity';

export class ListServicesResponse {
  name: string;

  description: string;

  serviceId: string;

  uuid: string;

  // initialization of values
  constructor(service: ServiceEntity) {
    const { name, serviceId, description, uuid } = service;
    this.name = name;
    this.description = description;
    this.serviceId = serviceId;
    this.uuid = uuid;
  }
}

export class CreateServiceBody {
  serviceId: string;

  name: string;

  description: string;
}
