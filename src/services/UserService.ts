import { UserRepository } from '../repositories/UserRepository';

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUsers() {
    return this.userRepository.getUsers();
  }
}

export { UserService };