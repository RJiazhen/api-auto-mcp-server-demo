import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Return all users.',
    type: [UserDto],
  })
  findAll(): UserDto[] {
    return this.usersService.findAll();
  }

  @Get('byId')
  @ApiOperation({ summary: 'Get user by ID (query parameter)' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: 'number',
    description: 'User ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Return a user by ID.',
    type: UserDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  findOneByQuery(@Query('id') id: string): UserDto | undefined {
    return this.usersService.findOne(Number(id));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID (path parameter)' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Return a user by ID.',
    type: UserDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  findOneByPath(@Param('id') id: string): UserDto | undefined {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({
    type: UserDto,
    required: true,
    description: 'User information',
    examples: {
      a: {
        summary: 'Create new user',
        value: {
          name: 'New User',
          email: 'new@example.com',
          age: 25,
          role: 'user',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully.',
    type: UserDto,
  })
  create(@Body() createUserDto: Omit<UserDto, 'id'>): UserDto {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user information' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID', example: 1 })
  @ApiBody({
    type: UserDto,
    required: true,
    description: 'User information to update',
    examples: {
      a: {
        summary: 'Update user name and email',
        value: {
          name: 'Updated Name',
          email: 'updated@example.com',
        } as UserDto,
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully.',
    type: UserDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<UserDto> = {},
  ): UserDto | undefined {
    console.log('updateUserDto', updateUserDto);
    return this.usersService.update(Number(id), updateUserDto);
  }
}
