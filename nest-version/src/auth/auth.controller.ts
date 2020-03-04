import { Controller, Render, Get, Post, Body, ValidationPipe, Logger, Res } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Response } from 'express'
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService){};
    private logger = new Logger('AuthController');
    

    // forget password
    @Get('/password/forget')
    @Render('password-forget')
    getLupaPassword(){
        return ({
            pageTitle: "Lupa Password",
            contentTitle :"Silahkan input email, untuk mendapatkan informasi Akun."
        })
    }


    // login
    @Post('/login')
    async postLogin(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto, @Res() res: Response){

        this.logger.log(JSON.stringify(authCredentialsDto));
        return res.render(
            await this.authService.postLogin(), {

            }
        )
    }


}
