import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, ProductService, UserService],
})
export class AppModule {}
