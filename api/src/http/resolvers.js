import userRepository from '../infra/data/userRepository';

export default {
  Query: {
    users: () => {
      return userRepository.getAll();
    },
    user: (_, { id }) => {
      return userRepository.getById(id);
    }
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      return userRepository.save({
        name, email
      });
    }
  }
}