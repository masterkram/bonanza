import { Module } from '@nestjs/common';
import { VarietyService } from './variety.service';
import { VarietyController } from './variety.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Variety } from './variety.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Variety])],
  providers: [VarietyService],
  controllers: [VarietyController]
})
export class VarietyModule {}
