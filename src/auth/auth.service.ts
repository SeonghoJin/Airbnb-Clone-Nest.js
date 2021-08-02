import { UserRespository } from '../database/UserRespository';
import { Injectable } from '@nestjs/common';
import { Session } from 'src/session';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRespository,
    private readonly session: Session,
  ) {
    this.userRepository = userRepository;
    this.session = session;
  }

  validateUser(id: string, password: string) {
    const user = this.userRepository.findOne(id);
    return user;
  }

  singUp(id: string, password: string) {
    const user = this.userRepository.findOne(id);
    if (user != null) {
      return null;
    }
    return this.userRepository.insert({
      id,
      password,
    });
  }

  signIn(id: string, password: string) {
    const user = this.userRepository.findOne(id);
    if (user == null) {
      return null;
    }
    this.session.insert(user.id);
    return user;
  }

  logout(id: string) {
    this.session.delete(id);
  }
}
