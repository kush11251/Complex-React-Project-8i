import { UserRepositoryInterface } from '../interfaces/UserRepositoryInterface';
import { User } from '../models/User';

class UserRepository implements UserRepositoryInterface {
  async getUsers() {
    // Simulate a database query
    const users: User[] = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
    ];
    return users;
  }
}

export { UserRepository };