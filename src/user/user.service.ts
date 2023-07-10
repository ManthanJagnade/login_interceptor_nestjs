import { Injectable } from '@nestjs/common';
import { MongoClient, Collection } from 'mongodb';
import { CreateUserDto } from './dto/user.dto';

export interface User {
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  private usersCollection: Collection<User>;
  private mongoClient: MongoClient;

  constructor() {
    this.mongoClient = new MongoClient('mongodb://127.0.0.1:27017');
    this.mongoClient.connect()
      .then(() => {
        console.log('Connected to MongoDB successfully');
        this.usersCollection = this.mongoClient.db('login_I').collection('users');
      })
      .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
      });
  }

  async createUser(createUserDto: CreateUserDto): Promise<string> {
    const user = {
      name: createUserDto.name,
      email: createUserDto.email,
    };

    try {
      await this.usersCollection.insertOne(user);
      return 'User created successfully';
    } catch (error) {
      console.error('Failed to create user:', error);
      throw new Error('Failed to create user');
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.usersCollection.find().toArray();
      return users;
    } catch (error) {
      console.error('Failed to retrieve users:', error);
      throw new Error('Failed to retrieve users');
    }
  }
}
