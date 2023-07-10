import { Controller, Get, Post, Body, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService, User } from './user.service';
import { LoggingInterceptor } from './logging.interceptor';


@Controller('users')
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    const result = await this.userService.createUser(createUserDto);
    return result;
  }

  @Get()
async findAll(): Promise<User[]> {
  const users = await this.userService.getAllUsers();
  return users;
}
}
