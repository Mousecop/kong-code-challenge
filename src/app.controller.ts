import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  CreateServiceBody,
  ListServiceResponse,
  ServiceDetailResponse,
} from './interfaces/services.dto';

@Controller('/v1/services')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createService(
    @Body() body: CreateServiceBody,
  ): Promise<ServiceDetailResponse> {
    return await this.appService.createService(body);
  }

  @Get()
  async listServices(): Promise<ListServiceResponse> {
    return await this.appService.listServices();
  }
}
