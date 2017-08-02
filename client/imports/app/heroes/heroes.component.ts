import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import template from './heroes.component.html';
import style from './heroes.component.scss';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    selector: 'my-heroes',
    template,
    styles: [style]
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
    
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

 }