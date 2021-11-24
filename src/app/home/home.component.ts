import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  player = false;


  constructor() { }

  ngOnInit(): void {

  }

  recebendoPlayer(evento: any){
    this.player = evento;
  }
}
