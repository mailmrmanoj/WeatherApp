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

        //region confg and run methods implementation
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider) {
            this.router.initialize($stateProvider, $urlRouterProvider);
        }
        //endregion
    }
}
