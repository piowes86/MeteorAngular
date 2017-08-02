import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import template from './hero-detail.component.html';
import style from './hero-detail.component.scss';

import { HeroService } from '../hero/hero.service';
import { Hero } from '../hero/hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  template,
  styles: [style]
})

export class HeroDetailComponent implements OnInit {

    @Input()
    hero: Hero;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
 
    save(): void {
        this.heroService.update(this.hero)
        .then(() => this.goBack());
    }
}