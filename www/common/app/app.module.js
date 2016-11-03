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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var empty_component_1 = require('./empty.component');
var home_component_1 = require('./home.component');
var navigation_component_1 = require('./navigation.component');
var features_component_1 = require('./features.component');
var push_component_1 = require('./push.component');
var pushdata_component_1 = require('./pushdata.component');
var app_routing_module_1 = require('./app-routing.module');
///<reference path="../node_modules/typings/index.d.ts"/>
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                empty_component_1.EmptyComponent,
                home_component_1.HomeComponent,
                navigation_component_1.NavigationComponent,
                features_component_1.FeaturesComponent,
                push_component_1.PushComponent,
                pushdata_component_1.PushdataComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map