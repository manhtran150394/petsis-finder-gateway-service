import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateUserRequestDTO } from 'src/dtos/create-user-request.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  async createUser(reqData: CreateUserRequestDTO) {
    return await firstValueFrom(
      this.userClient.send({ cmd: 'create_user' }, reqData),
    );
  }
}
