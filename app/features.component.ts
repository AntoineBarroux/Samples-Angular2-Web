import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'features-section',
    templateUrl: './features.component.html'
})
export class FeaturesComponent {
    nativeCalcul(): void{
        const MAX = 10;

        var data = {
            nb1: (Math.floor(Math.random() * MAX) + 1),
            nb2: (Math.floor(Math.random() * MAX) + 1)
        };

        cobalt.log('Nb1=' + data.nb1 + ', nb2=' + data.nb2);
        cobalt.sendEvent('nativeCalcul', data, function(result){
            cobalt.toast(data.nb1 + ' + ' + data.nb2 + ', native answered : ' + JSON.stringify(result.result));
        });
    }
}