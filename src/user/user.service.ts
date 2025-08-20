import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = [
        { id: 1, name: 'Ziaul', email: 'ziaul@gmail.com', type: 'admin' },
        { id: 2, name: 'John', email: 'John@gmail.com', type: 'user' },
        { id: 3, name: 'Jane', email: 'jane@gmail.com', type: 'user' },
    ];
    getAllUsers() {
        return this.users;
    }
    getUserById(id: number) {
        return this.users.find(user => user.id === id);
    }
    getUserType(type: string) {
        return this.users.filter(user => user.type === type);
    }
}
