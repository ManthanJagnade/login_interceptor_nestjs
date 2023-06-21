import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('users')
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const result = this.userService.createUser(createUserDto);
    return result;
  }
}
