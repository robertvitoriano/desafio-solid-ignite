import { v4 as uuidV4 } from "uuid";

class User {
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }

  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  id?: string;
  admin: boolean;
}

export { User };
