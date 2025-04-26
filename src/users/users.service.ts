import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import mockUser from './mock/users.mock.json';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService {
  private readonly users: UserDto[];
  private readonly mockDataPath: string;

  constructor() {
    this.users = mockUser;
    this.mockDataPath = path.join(__dirname, 'mock', 'users.mock.json');
  }

  findAll(): UserDto[] {
    return this.users;
  }

  findOne(id: number): UserDto | undefined {
    return this.users.find((user) => user.id === id);
  }

  create(createUserDto: Omit<UserDto, 'id'>): UserDto {
    const newUser: UserDto = {
      id: Math.max(...this.users.map((user) => user.id)) + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    fs.writeFileSync(this.mockDataPath, JSON.stringify(this.users, null, 2));
    return newUser;
  }

  update(id: number, updateUserDto: Partial<UserDto>): UserDto | undefined {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) return undefined;

    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    fs.writeFileSync(this.mockDataPath, JSON.stringify(this.users, null, 2));
    return this.users[userIndex];
  }
}
