import { Injectable } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { message: 'I have signed up' };
  }
  signin() {
    return { message: 'I have signed in' };
  }
}
