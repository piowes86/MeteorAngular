import { Component } from '@angular/core';
import template from './app.component.html';
import style from './app.component.scss';

import { Hero } from './hero';
import { HEROES } from './hero.service';

@Component({
    selector: 'app',
    template,
    styles: [style],
})

export class AppComponent {

    heroes: Hero[] = HEROES;

    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

 }