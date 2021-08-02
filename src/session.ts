import { Injectable } from '@nestjs/common';

@Injectable()
export class Session {
  database = new Set<string>();
  insert = (id: string) => {
    this.database.add(id);
  };

  delete = (id: string) => {
    this.database.delete(id);
  };

  exist = (id: string) => {
    return this.database.has(id);
  };
}
