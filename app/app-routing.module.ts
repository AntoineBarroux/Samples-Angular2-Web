import {NgModule}             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home.component';
import { PushComponent}       from './push.component';
import { EmptyComponent }     from './empty.component';
import { CobaltRoutingGuard } from './cobalt-routing.guard';

const routes: Routes = [
    {
        path: '',
        component: EmptyComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'push',
        component: PushComponent
    },
    {
        path: 'push/:action/:id',
        component: PushComponent
    }
];


//This script is in order to add the cobalt router
routes.forEach(function(route){
    if (route.canActivate){
        route.canActivate.push(CobaltRoutingGuard);
    }
    else{
        route.canActivate = [CobaltRoutingGuard];
    }
})


@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}