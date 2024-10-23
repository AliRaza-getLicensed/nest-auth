import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { RegisterDto } from 'src/dto/register.dto';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto) {
    // Here you would typically:
    // 1. Validate the user's credentials
    // 2. Generate a JWT token
    // 3. Return the token

    // For this example, we'll just return a mock response
    return {
      access_token: 'mock_token',
      user: {
        id: 1,
        email: loginDto.email,
      },
    };
  }
  async register(RegisterDto: RegisterDto) {
    // Here you would typically:
    // 1. Validate the user's credentials
    // 2. Generate a JWT token
    // 3. Return the token

    // For this example, we'll just return a mock response
    return {
      access_token: 'mock_token',
      user: {
        id: 1,
        email: RegisterDto.email,
        first_name: RegisterDto.first_name,
        last_name: RegisterDto.last_name,
        phone_number: RegisterDto.phone_number,
      },
    };
  }
}
