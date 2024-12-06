import { Injectable } from '@angular/core';
import { GameData } from '../models/gameData'
import { dataFake } from './dataFake'

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private gamesData: GameData[]

  constructor() {
    this.gamesData = dataFake;
  }

  getGames(): GameData[] {
    return this.gamesData;
  }
  searchGame(gameName: string): GameData[] {
    var result = this.gamesData.filter((game) => game.name == gameName );

    return result;
  }
}
