import { Inject, HostListener, PLATFORM_ID, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from './modules/util/items.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule
        //	NgUniversalModule
    ],
    providers: [ ItemsService],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
    }

}

