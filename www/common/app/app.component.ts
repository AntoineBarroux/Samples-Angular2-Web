import {Component, AfterViewInit} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'main-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit{
    title: String;

    constructor(){
        this.title = "Sample Angular";
    }

    ngAfterViewInit(): void{
        cobalt.log('onPageShown received by web side');
        if (!onPageShownData){
            location.href = '#/home';
        }
        else{
            location.href = onPageShownData.url;
        }
    }
}
