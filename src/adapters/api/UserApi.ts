import { User } from '../models/User';
import { UserRepositoryInterface } from '../interfaces/UserRepositoryInterface';

class UserApi {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  async getUsers() {
    return this.userRepository.getUsers();
  }
}

export { UserApi };