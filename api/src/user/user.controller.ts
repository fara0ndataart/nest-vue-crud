import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    Query,
    ParseIntPipe
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.model';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userRepository: UserRepository) {}

    @Get()
    getUsers(
        @Query('page', ParseIntPipe) page: number,
        @Query('limit', ParseIntPipe) limit: number,
    ) {
        return this.userRepository.getUsers(page, limit);
    }

    @Get(':id')
    getUserById(@Param('id') id: string): Promise<User | null> {
        return this.userRepository.getUserById(id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto
    ): Promise<User | null> {
        return this.userRepository.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): Promise<User | null> {
        return this.userRepository.deleteUser(id);
    }
}
