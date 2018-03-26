import { Component, OnInit } from '@angular/core';
import { Town } from '../town'

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  town: Town = {id: 1, name: 'belfort', temperature:0, icon: "rain"}
  
  constructor() { }

  ngOnInit() {
  }

}
