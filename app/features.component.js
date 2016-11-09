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
var FeaturesComponent = (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.nativeCalcul = function () {
        var MAX = 10;
        var data = {
            nb1: (Math.floor(Math.random() * MAX) + 1),
            nb2: (Math.floor(Math.random() * MAX) + 1)
        };
        cobalt.log('Nb1=' + data.nb1 + ', nb2=' + data.nb2);
        cobalt.sendEvent('nativeCalcul', data, function (result) {
            cobalt.toast(data.nb1 + ' + ' + data.nb2 + ', native answered : ' + JSON.stringify(result.result));
        });
    };
    FeaturesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'features-section',
            templateUrl: './features.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());
exports.FeaturesComponent = FeaturesComponent;
//# sourceMappingURL=features.component.js.map