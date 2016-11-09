import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar-section',
    templateUrl: './native-bar.component.html'
})
export class NativeBarComponent implements OnInit{
    barPosition:String='top'
    bgColor:String = '#00ADEC';


    ngOnInit() {
        cobalt.nativeBars.setEventListener(function(itemName,event){
            switch (itemName){
                case "sun":
                    alert("Sun is shining !");
                    break;
                case "moon":
                    alert("Moon is beautiful !");
                    break;
                case "cloudy":
                    cobalt.log('Avant : ' + this.bgColor);
                    this.bgColor = (!this.bgColor) ? '#000' : ((this.bgColor == '#00ADEC') ? '#000' : '#00ADEC');
                    cobalt.log('Après : ' + this.bgColor);
                    if (this.barPosition == 'top') {
                        cobalt.nativeBars.setBars({
                            "backgroundColor": this.bgColor,
                            "visible": {top: true, bottom: false}
                        });
                    } else{
                        cobalt.nativeBars.setBars({
                            "backgroundColor": this.bgColor,
                            "visible": { top: false, bottom: true }
                        });
                    }
                    break;
            }
        });
    }

    changePositionBar(): void{
        switch(this.barPosition){
            case 'top':
                this.barPosition = 'bottom';
                cobalt.nativeBars.setBarsVisible({ top : false, bottom: true});
                break;
            case 'bottom':
                this.barPosition = 'top';
                cobalt.nativeBars.setBarsVisible({ top : true, bottom: false})
                break;
        }
    }
}