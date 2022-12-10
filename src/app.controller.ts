import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todo')
  @Render('todo')
  todos() {
    return;
  }

  @Get('')
  @Render('home')
  home() {
    return;
  }

  @Get('login')
  @Render('login')
  login() {
    return;
  }

  @Get('signup')
  @Render('signup')
  signup() {
    return;
  }
}
