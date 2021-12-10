import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogoAvonRepository } from './CatalogoAvon.repositoy';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([CatalogoAvonRepository])
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class CatalogoModule {}