// players.module.ts
/*import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { Player, PlayerSchema } from './schemas/player.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  ],
  providers: [PlayersService],
  controllers: [PlayersController],
})
export class PlayersModule {}*/
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { Player, PlayerSchema } from './schemas/player.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}

