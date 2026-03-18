interface UserRepositoryInterface {
  getUsers(): Promise<User[]>;
}

export { UserRepositoryInterface };