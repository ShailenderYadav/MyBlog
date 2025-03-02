import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {
    return res.redirect(`http://localhost:3000/login-success?token=${req.user.jwt}`);
  }

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin() {}

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  facebookAuthRedirect(@Req() req, @Res() res) {
    return res.redirect(`http://localhost:3000/login-success?token=${req.user.jwt}`);
  }
}
