import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    signIn(){
        return {msg:"User Signed In"};
    }
    signUp(){
        return {msg:"User Signed Up"};
    }
}