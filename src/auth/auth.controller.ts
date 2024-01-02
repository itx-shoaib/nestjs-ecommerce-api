import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUser } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() data: createUser): any {
    return this.authService.login(data);
  }
}
