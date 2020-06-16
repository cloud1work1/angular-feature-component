import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HEROS} from '../mock-heros';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heros:Hero[] = HEROS;
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

 onSelect(hero) {
   this.selectedHero=hero;
 }
}