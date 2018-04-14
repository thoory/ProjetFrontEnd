import { Component, OnInit } from '@angular/core';
import { Town } from '../town'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  imports: [BrowserAnimationsModule],
  imports: [MatButtonModule, MatCheckboxModule]
})
export class MeteoComponent implements OnInit {

  town: Town = {id: 1, name: 'belfort', temperature:0, icon: "rain"}
  
  constructor() { }

  ngOnInit() {
  }

}