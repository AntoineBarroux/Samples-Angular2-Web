"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NativeBarComponent = (function () {
    function NativeBarComponent() {
        this.barPosition = 'top';
        this.bgColor = '#00ADEC';
    }
    NativeBarComponent.prototype.ngOnInit = function () {
        cobalt.nativeBars.setEventListener(function (itemName, event) {
            switch (itemName) {
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
                            "visible": { top: true, bottom: false }
                        });
                    }
                    else {
                        cobalt.nativeBars.setBars({
                            "backgroundColor": this.bgColor,
                            "visible": { top: false, bottom: true }
                        });
                    }
                    break;
            }
        });
    };
    NativeBarComponent.prototype.changePositionBar = function () {
        switch (this.barPosition) {
            case 'top':
                this.barPosition = 'bottom';
                cobalt.nativeBars.setBarsVisible({ top: false, bottom: true });
                break;
            case 'bottom':
                this.barPosition = 'top';
                cobalt.nativeBars.setBarsVisible({ top: true, bottom: false });
                break;
        }
    };
    NativeBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-section',
            templateUrl: './native-bar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NativeBarComponent);
    return NativeBarComponent;
}());
exports.NativeBarComponent = NativeBarComponent;
//# sourceMappingURL=native-bar.component.js.map