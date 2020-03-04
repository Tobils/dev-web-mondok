import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MondokController } from './mondok/mondok.controller';
import { MondokService } from './mondok/mondok.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController, MondokController],
  providers: [AuthService, MondokService],
})
export class AppModule {} 
