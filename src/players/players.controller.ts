/*import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './schemas/player.schema';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async create(@Body() playerDto: any): Promise<Player> {
    return this.playersService.create(playerDto);
  }

  @Get()
  async findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Player | null> {
    return this.playersService.remove(id);
  }
}*/
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  @UseGuards(JwtAuthGuard) // Protect this route with JWT authentication
  async findAll() {
    return this.playersService.findAll();
  }
}

