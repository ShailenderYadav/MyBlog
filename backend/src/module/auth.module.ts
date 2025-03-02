import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../services/auth.services';
import { GoogleStrategy } from '../strategies/google.strategies';
import { FacebookStrategy } from '../strategies/facebook.strategies';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../controller/auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'your_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, FacebookStrategy],
})
export class AuthModule {}
