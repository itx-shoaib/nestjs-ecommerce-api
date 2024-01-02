import { Injectable } from '@nestjs/common';
import { createUser } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  login(data: createUser) {
    return data;
  }

  signup() {
    return 'SignUp Successful!';
  }

  logout() {
    return 'User is logout!';
  }
}
