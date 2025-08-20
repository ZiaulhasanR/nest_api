import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = [
        { id: 1, name: 'Ziaul', email: 'ziaul@gmail.com'},
        { id: 2, name: 'John', email: 'John@gmail.com' },
        { id: 3, name: 'Jane', email: 'jane@gmail.com' },
    ];
    getAllUsers() {
        return this.users;
    }
    getUserById(id: number) {
        return this.users.find(user => user.id === id);
    }
}
