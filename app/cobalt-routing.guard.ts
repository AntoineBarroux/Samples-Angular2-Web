import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

Injectable()
export class CobaltRoutingGuard implements CanActivate {
    canActivate(next: ActivatedRouteSnapshot, prev: RouterStateSnapshot) {

        if (!next.queryParams['type']){
            return true;
        }

        else{
            const typeNav = next.queryParams['type'];
            const controller = next.queryParams['controller'] ? next.queryParams['controller'] : '';
            cobalt.log('Controller asked : ' + controller);

            var url = '#/';
            var arr = next.url.toString().split(',');
            for (var i = 0; i<arr.length; i++){
                url += arr[i] + '/';
            }

            var data = {};
            data.url = url;

            // Of course you could add to data query params you want, but here we just have the navigation type
            var params = next.params;
            for (var key in params) {
                if( params.hasOwnProperty(key) ) {
                    data[key] = params[key];
                }
            }


            switch (typeNav){
                case 'push':
                    cobalt.navigate.push({page: 'index.html', controller: controller, data: data});
                    break;
                case 'pop':
                    cobalt.navigate.pop({page: 'index.html', controller: controller, data: data});
                    break;
                case 'modal':
                    cobalt.navigate.modal({page: 'index.html', controller: controller, data: data});
                    break;
                case 'replace':
                    cobalt.navigate.replace({page: 'index.html', controller: controller, data: data});
                    break;
                default:
                    cobalt.log('Pas de navigation native');
                    break;
            }

            return false;
        }
    }
}