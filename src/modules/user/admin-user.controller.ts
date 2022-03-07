import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { RoleType } from '../../constants';
import { Auth } from '../../decorators';
import { UserPagingDto } from './dto/UserPagingDto';
import { UsersPageDto } from './dto/UsersPageDto';
import { UserService } from './user.service';

@Controller('admin/users')
@ApiTags('admin/users')
export class AdminUserController {
  constructor(private userService: UserService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: UsersPageDto,
    description: 'List of users',
  })
  @Auth([RoleType.ADMIN])
  getUsers(
    @Query(new ValidationPipe({ transform: true }))
    pageOptionsDto: UserPagingDto,
  ): Promise<UserPagingDto> {
    return this.userService.getUsers(pageOptionsDto);
  }
}
