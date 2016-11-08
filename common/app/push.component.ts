import {Component, AfterViewInit} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'simple-push',
    templateUrl: './push.component.html',
})
export class PushComponent implements AfterViewInit{
    ngAfterViewInit(): void{
        delete onPageShownData.url

        if (Object.keys(onPageShownData).length > 0){
            var msg = "Some data were sent to this page ! \n";
            msg += JSON.stringify(onPageShownData);
            alert(msg);
        }
    }
}