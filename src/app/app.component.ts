import { Component,NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular_learning';
  cards: any;
  constructor () {}
  ngOnInit(): void {
    
  }
}