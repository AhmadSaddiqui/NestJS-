import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from './schemas/player.schema';

@Injectable()
export class PlayersService implements OnModuleInit {
  constructor(@InjectModel(Player.name) private playerModel: Model<Player>) {}

  async onModuleInit() {
    await this.seedPlayers();
  }

  async create(createPlayerDto: Partial<Player>): Promise<Player> {
    const newPlayer = new this.playerModel(createPlayerDto);
    return newPlayer.save();
  }

  async findAll(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  async findOne(id: string): Promise<Player | null> {
    return this.playerModel.findById(id).exec();
  }

  async update(id: string, updatePlayerDto: Partial<Player>): Promise<Player | null> {
    return this.playerModel.findByIdAndUpdate(id, updatePlayerDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Player | null> {
    return this.playerModel.findByIdAndDelete(id).exec();
  }

  private async seedPlayers() {
    const count = await this.playerModel.countDocuments();
    if (count === 0) {
      const players = [
        { name: 'John Doe', position: 'Forward', team: 'Team A' },
        { name: 'Jane Smith', position: 'Midfielder', team: 'Team B' },
        { name: 'Alice Johnson', position: 'Defender', team: 'Team A' },
        { name: 'Bob Brown', position: 'Goalkeeper', team: 'Team C' },
        { name: 'Charlie Davis', position: 'Forward', team: 'Team B' },
        { name: 'Diana Evans', position: 'Midfielder', team: 'Team A' },
        { name: 'Ethan Harris', position: 'Defender', team: 'Team C' },
        { name: 'Fiona Green', position: 'Goalkeeper', team: 'Team B' },
        { name: 'George Hall', position: 'Forward', team: 'Team A' },
        { name: 'Hannah White', position: 'Midfielder', team: 'Team C' },
      ];

      await this.playerModel.insertMany(players);
      console.log('Sample players data has been added to the database.');
    } else {
      console.log('Sample players data already exists in the database.');
    }
  }
}
