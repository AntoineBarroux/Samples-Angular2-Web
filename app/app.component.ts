import {Component, AfterViewInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'main-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit{
    title: String = "Sample Angular";

    ngAfterViewInit(): void{
        cobalt.log('onPageShown received by web side with data', onPageShownData);
        if (!onPageShownData){
            location.href = '#/home';
            cobalt.log('affichage de home');
        }
        else{
            location.href = onPageShownData.url;
            cobalt.log('affichage de ' + onPageShownData.url);
        }
    }
}
