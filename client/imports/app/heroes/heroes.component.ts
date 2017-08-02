import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import template from './heroes.component.html';
import style from './heroes.component.scss';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    selector: 'my-heroes',
    template,
    styles: [style],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {

    selectedHero: Hero;
    heroes: Hero[];

    constructor (
        private router: Router,
        private heroService: HeroService
    ) {}

    ngOnInit(): void {
        this.getHeroes();
    }


    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

 }