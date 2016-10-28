import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { AppComponent }       from './app.component';
import { HomeComponent }      from './home.component';
import { NavigationComponent} from './navigation.component';
import { FeaturesComponent }  from './features.component';
import { PushComponent}       from './push.component';
import { PushdataComponent}   from './pushdata.component';

import { AppRoutingModule }   from './app-routing.module';

@NgModule({
    imports:        [
                        BrowserModule,
                        AppRoutingModule
                    ],
    declarations:   [
                        AppComponent,
                        HomeComponent,
                        NavigationComponent,
                        FeaturesComponent,
                        PushComponent,
                        PushdataComponent
                    ],
    bootstrap:      [
                        AppComponent,
                        HomeComponent,
                        NavigationComponent,
                        FeaturesComponent,
                        PushComponent,
                        PushdataComponent
                    ]
})

export class AppModule {}