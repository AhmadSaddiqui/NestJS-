import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async onModuleInit() {
    await this.seedUsers();
  }

  async create(userDto: any): Promise<User> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async remove(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  private async seedUsers() {
    const users = [
      { username: 'john_doe', password: 'password123', email: 'john@example.com' },
      { username: 'jane_smith', password: 'password123', email: 'jane@example.com' },
      { username: 'alice_johnson', password: 'password123', email: 'alice@example.com' },
    ];

    const count = await this.userModel.countDocuments();
    if (count === 0) {
      await this.userModel.insertMany(users);
      console.log('Sample users data has been added to the database.');
    } else {
      console.log('Sample users data already exists in the database.');
    }
  }
}
