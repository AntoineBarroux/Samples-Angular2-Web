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
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var push_component_1 = require('./push.component');
var empty_component_1 = require('./empty.component');
var native_bar_component_1 = require('./native-bar.component');
var cobalt_routing_guard_1 = require('./cobalt-routing.guard');
var routes = [
    {
        path: '',
        component: empty_component_1.EmptyComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'push',
        component: push_component_1.PushComponent
    },
    {
        path: 'push/:action/:id',
        component: push_component_1.PushComponent
    },
    {
        path: 'nativebars',
        component: native_bar_component_1.NativeBarComponent
    }
];
//This script is in order to add the cobalt router
routes.forEach(function (route) {
    if (route.canActivate) {
        route.canActivate.push(cobalt_routing_guard_1.CobaltRoutingGuard);
    }
    else {
        route.canActivate = [cobalt_routing_guard_1.CobaltRoutingGuard];
    }
});
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map