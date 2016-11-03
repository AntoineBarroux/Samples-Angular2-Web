import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home.component';
import { PushComponent}       from './push.component';
import { PushdataComponent}   from './pushdata.component';
import { EmptyComponent }     from './empty.component';

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
        component: PushdataComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}