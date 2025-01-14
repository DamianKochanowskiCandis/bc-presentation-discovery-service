import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('*/5 * * * * *')
  handleCron() {
    this.logger.log(`It's ${new Date().toISOString()}`);
  }
}