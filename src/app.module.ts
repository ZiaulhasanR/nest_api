import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('database.db_uri'),
      }),
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [ProductService, UserService, AuthService],
})
export class AppModule {}
