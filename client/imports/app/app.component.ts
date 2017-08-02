import { Component, OnInit } from '@angular/core';
import template from './app.component.html';
import style from './app.component.scss';

@Component({
    selector: 'app',
    template,
    styles: [style],
    providers: []
})

export class AppComponent {

    title = 'Tour of heroes;'

 }