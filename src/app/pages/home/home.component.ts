import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/app/models/gameData';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData: GameData[]

  constructor(
    private service: GameService
  ) {
    this.allData = [{
      id: 0,
      name: '',
      label: '',
      type: '',
      category: [],
      image: '',
      price: ''
    }]
  }

  ngOnInit(): void {
    this.allData = this.service.getGames();
  }
}
