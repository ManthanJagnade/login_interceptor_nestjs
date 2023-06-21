// app.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './user/logging.interceptor';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
