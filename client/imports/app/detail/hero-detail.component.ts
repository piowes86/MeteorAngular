import { Component, Input } from '@angular/core';

import template from './hero-detail.component.html';
import { Hero } from '../hero/hero';

@Component({
  selector: 'hero-detail',
  template,
})

export class HeroDetailComponent {

    @Input()
    hero: Hero;
}