import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  // constructor(private configService: ConfigService) {}
  getHello(): string {
    // const db = this.configService.get<string>('MONGO_URI')
    return 'Hello World!';
  }
}
