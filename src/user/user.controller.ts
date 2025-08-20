import { Get,Controller, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.getAllUsers();
    }
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(Number(id));
    }
}
