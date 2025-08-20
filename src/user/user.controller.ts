import { Get,Controller, Param,Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @Get()
    // getUsers() {
    //     return this.userService.getAllUsers();
    // }
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
