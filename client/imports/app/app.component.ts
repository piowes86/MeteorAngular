import { Component } from '@angular/core';
import template from './app.component.html';
import style from './app.component.scss';

import { Hero } from './hero';

@Component({
    selector: 'app',
    template,
    styles: [style],
})

export class AppComponent {
    
    title = 'Tour of Heroes';
    
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
 }