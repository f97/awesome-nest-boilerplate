import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import type { IAbstractEntity } from '../../common/abstract.entity';
import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators';
import type { UserDtoOptions } from './dtos/user.dto';
import { UserDto } from './dtos/user.dto';
import type { IUserEntity } from './user.entity';
import { UserEntity } from './user.entity';

export interface IUserSettingsEntity extends IAbstractEntity<UserDto> {
  isEmailVerified?: boolean;

  isPhoneVerified?: boolean;

  user?: IUserEntity;
}

@Schema({ discriminatorKey: 'user_settings' })
@UseDto(UserDto)
export class UserSettingsEntity
  extends AbstractEntity<UserDto, UserDtoOptions>
  implements IUserSettingsEntity
{
  @Prop({ default: false })
  isEmailVerified?: boolean;

  @Prop({ default: false })
  isPhoneVerified?: boolean;

  @Prop({ type: 'uuid' })
  userId?: string;

  @Prop({ name: 'user_id' })
  user?: UserEntity;
}

export const userSettingsSchema =
  SchemaFactory.createForClass(UserSettingsEntity);
