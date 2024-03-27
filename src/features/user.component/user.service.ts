import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  async createUserProfile() {
    return await firstValueFrom(
      this.userClient.send({ cmd: 'create_user_profile' }, {}),
    );
  }
}
