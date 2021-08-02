import { User } from '../entities/user';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserRespository {
  private database = new Map<string, User>();

  findOne = (id: string): User | null => {
    const user = this.database.get(id);
    if (user == null) {
      return null;
    }

    return user;
  };

  insert = (user: User) => {
    this.database.set(user.id, user);
    return user;
  };
}
