import {NgModule}           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { LocationStrategy,
         HashLocationStrategy }
                              from '@angular/common';

import { AppComponent }       from './app.component';
import { EmptyComponent }     from './empty.component';
import { HomeComponent }      from './home.component';
import { NavigationComponent} from './navigation.component';
import { FeaturesComponent }  from './features.component';
import { PushComponent}       from './push.component';
import { PushdataComponent}   from './pushdata.component';

import { AppRoutingModule }   from './app-routing.module';


///<reference path="../node_modules/typings/index.d.ts"/>


@NgModule({
    imports:        [
                        BrowserModule,
                        AppRoutingModule
    ],
    declarations:   [
                        AppComponent,
                        EmptyComponent,
                        HomeComponent,
                        NavigationComponent,
                        FeaturesComponent,
                        PushComponent,
                        PushdataComponent
                    ],
    bootstrap:      [
                        AppComponent
                    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})

export class AppModule{

}
