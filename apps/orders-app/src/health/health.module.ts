import { PrismaModule } from '@app/prisma';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';

@Module({
  imports: [PrismaModule, TerminusModule.forRoot({ logger: false })],
  controllers: [HealthController],
})
export class HealthModule {}
