import { Controller, Get, Render } from '@nestjs/common';


@Controller()
export class AppController {

  @Get()
  @Render('login')
  getLogin(){
    return({
        pageTitle: "Sign In",
        contentTitle :"Silahkan login untuk monitoring data."
    })
  }
}
