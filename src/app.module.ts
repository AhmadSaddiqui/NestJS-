import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/players'),  
    AuthModule,
    UsersModule,
    PlayersModule, 
  ],
})
export class AppModule {}
