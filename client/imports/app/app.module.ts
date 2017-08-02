import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroService } from './hero/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
