import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authcredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authcredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authcredentialsDto: AuthCredentialsDto) {
    return this.authService.signIn(authcredentialsDto);
  }
}
