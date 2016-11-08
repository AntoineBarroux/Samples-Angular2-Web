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
var PushComponent = (function () {
    function PushComponent() {
    }
    PushComponent.prototype.ngAfterViewInit = function () {
        delete onPageShownData.url;
        if (Object.keys(onPageShownData).length > 0) {
            var msg = "Some data were sent to this page ! \n";
            msg += JSON.stringify(onPageShownData);
            alert(msg);
        }
    };
    PushComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'simple-push',
            templateUrl: './push.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PushComponent);
    return PushComponent;
}());
exports.PushComponent = PushComponent;
//# sourceMappingURL=push.component.js.map