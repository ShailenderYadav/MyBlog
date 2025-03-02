import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-facebook';
import { AuthService } from '../services/auth.services';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private authService: AuthService) {
    super({
      clientID: '652347930618140',
      clientSecret: '1fb78224c3b76153b62866c51c6b9cf2',
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      profileFields: ['emails', 'name'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const jwt = await this.authService.validateOAuthLogin(profile);
    done(null, { jwt });
  }
}
