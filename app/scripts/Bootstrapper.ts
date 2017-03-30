///<reference path="Reference.ts"/>
module AngularWeatherApp {
    export class Bootstrapper {
        constructor(public module: ng.IModule, public router) {
        }

        //region confg and run methods declaration
        bootstrap() {
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", (RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: any) =>
                this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider)]);
        }

        initRestangular(RestangularProvider: any) {
            RestangularProvider.setParentless(true, []);
            if (localStorage.getItem("apiKey")) {
                RestangularProvider.setDefaultHeaders({ apiKey: localStorage.getItem("apiKey") });
            } else {
                location.href = "index.html#/home";
            }

        }

        //region confg and run methods implementation
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider) {
            this.initRestangular(RestangularProvider);
            this.router.initialize($stateProvider, $urlRouterProvider);
            //$http.defaults.headers.attack.apiKey = localStorage.getItem("apiKey") ? localStorage.getItem("apiKey") : "12s-212";
        }
        //endregion
    }
}
