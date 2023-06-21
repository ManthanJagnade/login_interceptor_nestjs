// user/user.service.ts

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto): string {
    // Process the request here
    return 'User created successfully';
  }
}
