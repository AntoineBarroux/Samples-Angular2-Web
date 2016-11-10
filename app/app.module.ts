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
import { NativeBarComponent } from './native-bar.component';

import { AppRoutingModule }   from './app-routing.module';
import { CobaltRoutingGuard } from './cobalt-routing.guard';


///<reference path="../node_modules/typings/index.d.ts"/>
///<reference path="../cobalt.d.ts"/>


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
                        NativeBarComponent
                    ],
    bootstrap:      [
                        AppComponent
                    ],
    providers: [
                        {provide: LocationStrategy, useClass: HashLocationStrategy},
                        CobaltRoutingGuard
                ]
})

export class AppModule{

}
