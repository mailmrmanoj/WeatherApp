///<reference path="Reference.ts"/>
module AngularWeatherApp.Services {
    export class DemoService extends BaseApi {
        static $inject = ["$injector"];
        constructor($injector) {
            super($injector, "customerAddress");
        }
    }
}