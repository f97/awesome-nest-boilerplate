import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import type { IAbstractEntity } from '../../common/abstract.entity';
import { AbstractEntity } from '../../common/abstract.entity';
import { RoleType } from '../../constants';
import { UseDto } from '../../decorators';
import type { UserDtoOptions } from './dtos/user.dto';
import { UserDto } from './dtos/user.dto';
import type { IUserSettingsEntity } from './user-settings.entity';

export interface IUserEntity extends IAbstractEntity<UserDto> {
  firstName?: string;

  lastName?: string;

  role: RoleType;

  email?: string;

  password?: string;

  phone?: string;

  avatar?: string;

  fullName?: string;

  settings?: IUserSettingsEntity;
}

@Schema({ discriminatorKey: 'users' })
@UseDto(UserDto)
export class UserEntity
  extends AbstractEntity<UserDto, UserDtoOptions>
  implements IUserEntity
{
  @Prop({ nullable: true })
  firstName?: string;

  @Prop({ nullable: true })
  lastName?: string;

  @Prop()
  role: RoleType;

  @Prop({ unique: true, nullable: true })
  email?: string;

  @Prop({ nullable: true })
  password?: string;

  @Prop({ nullable: true })
  phone?: string;

  @Prop({ nullable: true })
  avatar?: string;

  @Prop()
  fullName?: string;
}

export const userSchema = SchemaFactory.createForClass(UserEntity);
