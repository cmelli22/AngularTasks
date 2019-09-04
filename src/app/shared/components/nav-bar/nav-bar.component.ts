import { Component, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() searchWeather = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit() {
  }

  EmitirParam(paramQ: string): void {
    this.searchWeather.emit(paramQ);

  }

}
