"use strict";
var core_1 = require('@angular/core');
core_1.Injectable();
var CobaltRoutingGuard = (function () {
    function CobaltRoutingGuard() {
    }
    CobaltRoutingGuard.prototype.canActivate = function (next, prev) {
        if (!next.queryParams['type']) {
            return true;
        }
        else {
            var typeNav = next.queryParams['type'];
            var controller = next.queryParams['controller'] ? next.queryParams['controller'] : '';
            cobalt.log('Controller asked : ' + controller);
            var url = '#/';
            var arr = next.url.toString().split(',');
            for (var i = 0; i < arr.length; i++) {
                url += arr[i] + '/';
            }
            var data = {};
            data.url = url;
            // Of course you could add to data query params you want, but here we just have the navigation type
            var params = next.params;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    data[key] = params[key];
                }
            }
            switch (typeNav) {
                case 'push':
                    cobalt.navigate.push({ page: 'index.html', controller: controller, data: data });
                    break;
                case 'pop':
                    cobalt.navigate.pop({ page: 'index.html', data: data });
                    break;
                case 'modal':
                    cobalt.navigate.modal({ page: 'index.html', data: data });
                    break;
                case 'replace':
                    cobalt.navigate.replace({ page: 'index.html', data: data });
                    break;
                default:
                    cobalt.log('Pas de navigation native');
                    break;
            }
            return false;
        }
    };
    return CobaltRoutingGuard;
}());
exports.CobaltRoutingGuard = CobaltRoutingGuard;
//# sourceMappingURL=cobalt-routing.guard.js.map