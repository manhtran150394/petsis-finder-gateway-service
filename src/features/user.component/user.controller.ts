import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User management')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUser')
  @ApiOkResponse({
    description: 'Return if user account is created successfully',
  })
  @HttpCode(200)
  async createUser(@Body() reqData: CreateUserDTO) {
    const res = await this.userService.createUser(reqData);
    if (res.statusCode >= 200) {
      throw new HttpException(res, res.statusCode);
    }
    return res;
  }
}
