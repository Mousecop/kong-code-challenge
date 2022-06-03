import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  CreateServiceBody,
  ListServicesResponse,
} from './interfaces/services.dto';

@Controller('/v1/services')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createService(
    @Body() body: CreateServiceBody,
  ): Promise<ListServicesResponse> {
    return await this.appService.createService(body);
  }
}
