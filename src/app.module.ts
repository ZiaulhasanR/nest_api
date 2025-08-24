import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [],
  controllers: [UserController,AuthController],
  providers: [ ProductService, UserService,AuthService],
})
export class AppModule {}
