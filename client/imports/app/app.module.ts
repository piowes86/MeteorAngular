import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './detail/hero-detail.component';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
