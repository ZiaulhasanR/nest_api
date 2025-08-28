import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    signIn(){
        return {msg:"User Signed In",
            pass:"bcDYJ1S7o7SeBo8r",
            connection_string:"mongodb+srv://ziaulhasanf:bcDYJ1S7o7SeBo8r@nestapi.ux2bosr.mongodb.net/?retryWrites=true&w=majority&appName=nestApi"
        };
    }
    signUp(){
        return {msg:"User Signed Up"};
    }
}