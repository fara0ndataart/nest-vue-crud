import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        try {
            const createdUser = await new this.userModel(createUserDto);
            return createdUser.save().then((result) => result.toObject());
        } catch (error) {
            throw new Error(error)
        }
    }

    async getUsers(): Promise<User[]> {
        try {
            const users = await this.userModel.find().lean().exec();

            return users;
        } catch (error) {
            throw new Error(error)
        }
    }

    async getUserById(id: string): Promise<User | null> {
         try {
             const user = await this.userModel.findById(id).lean().exec();
             return user ? user as User : null;
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
         try {
             const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).lean().exec();
             return updatedUser ? updatedUser as User : null;
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteUser(id: string): Promise<User | null> {
         try {
             const deletedUser = await this.userModel.findByIdAndRemove(id).lean().exec();
             return deletedUser ? deletedUser as User : null;
        } catch (error) {
            throw new Error(error)
        }
    }
}
