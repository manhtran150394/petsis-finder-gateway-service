import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUserProfile')
  async createUserProfile() {
    try {
      return await this.userService.createUserProfile();
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
