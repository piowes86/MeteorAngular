import { Component, OnInit } from '@angular/core';

import template from './dashboard.component.html';
import style from './dashboard.component.scss';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';
import { HeroSearchComponent } from '../search/hero-search.component';

@Component({
  selector: 'my-dashboard',
  template,
  styles: [style]
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}