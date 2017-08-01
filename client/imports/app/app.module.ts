import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        HttpModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    entryComponents: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
