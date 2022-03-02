import { UserEntity, userSchema } from './user.entity';

export const userRepository = { name: UserEntity.name, schema: userSchema };
