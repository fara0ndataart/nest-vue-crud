import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = await new this.userModel(createUserDto);
        return createdUser.save().then((result) => result.toObject());
    }

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find().lean().exec();

        return users;
    }

    async getUserById(id: string): Promise<User | null> {
        const user = await this.userModel.findById(id).lean().exec();
        return user ? user as User : null;
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).lean().exec();
        return updatedUser ? updatedUser as User : null;
    }

    async deleteUser(id: string): Promise<User | null> {
        const deletedUser = await this.userModel.findByIdAndRemove(id).lean().exec();
        return deletedUser ? deletedUser as User : null;
    }
}
