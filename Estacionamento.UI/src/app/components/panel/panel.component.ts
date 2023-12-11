import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'carro-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  spotList: any[] = []

  constructor(){
    this.createSpots();
  }

  createSpots()
  {
    this.spotList = [
      {id: 1, isOccuped: false, currentCar: {Marca: 'FIAT', Modelo: 'Sienao', Placa: 'LOD7452', }},
      {id: 2, isOccuped: false},
      {id: 3, isOccuped: false},
      {id: 4, isOccuped: false},
      
    ]

  }

}
