import { ServiceEntity } from 'src/database/entities/service.entity';

export class ServiceDetailResponse {
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

export class ListServiceResponse {
  services: Array<ServiceDetailResponse>;

  constructor(servicesResult: Array<ServiceEntity>) {
    this.services = servicesResult.map(
      (service) => new ServiceDetailResponse(service),
    );
  }
}
