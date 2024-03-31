import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { UserModule } from './features/user.component/user.module';

@Global()
@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'USER_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            port: 3010,
          },
        });
      },
    },
  ],
  exports: ['USER_SERVICE'],
})
export class AppModule {}
