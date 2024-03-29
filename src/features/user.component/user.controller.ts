import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequestDTO } from 'src/dtos/create-user-request.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUser')
  async createUser(@Body() reqData: CreateUserRequestDTO) {
    const res = await this.userService.createUser(reqData);
    if (res.statusCode >= 200) {
      throw new HttpException(res, res.statusCode);
    }
    return res;
  }
}
