import { Component } from '@angular/core';
import { Routes, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
    moduleId: module.id,
    selector: 'navigation-section',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent {
    title: String = "Navigation";

    constructor(private router: Router) {
        this.router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe( path => {
                    const url = path["url"];
                    if (url == '#/push'){
                    }
                    else if (/#\/push\/[a-z]+\/[0-9]+/.test(url)){

                    }
                    else{

                    }
            } );
    }
}