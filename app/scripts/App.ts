///<reference path="Reference.ts"/>
module AngularWeatherApp {
    "use strict";
    export class App {
        module: ng.IModule;
        constructor() {
            var dependencies = [AngularWeatherApp.AngularWeatherConstants.SERVICES, AngularWeatherApp.AngularWeatherConstants.CONTROLLERS, "restangular", "ui.router"];
            this.module = angular.module(AngularWeatherApp.AngularWeatherConstants.MODULE, dependencies);
            var router = new AngularWeatherApp.Router();
            var bootstraper = new AngularWeatherApp.Bootstrapper(this.module, router);
            bootstraper.bootstrap();
        }
    };
    new App();
}
