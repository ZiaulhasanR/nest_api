import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

//     @Post()
//   create(@Body() createUserDto: CreateUserDto) {
//     return this.userService.create(createUserDto);
//   }

    @Get()
    getUsers() {
        return this.userService.getAllUsers();
    }
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(Number(id));
    }
    @Get()
    getUserType(@Query('type') type: string) {
        return [{type}];
    }
    @Get(':type')
    getUsersByType(@Param('type') type: string) {
        return this.userService.getUserType(type);
    }
}
