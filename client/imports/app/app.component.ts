import { Component, OnInit } from '@angular/core';
import template from './app.component.html';
import style from './app.component.scss';

import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';

@Component({
    selector: 'app',
    template,
    styles: [style],
    providers: [HeroService]
})

export class AppComponent implements OnInit {

    heroes: Hero[];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }


    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

 }