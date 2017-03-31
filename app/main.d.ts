/// <reference path="../types/jquery/jquery.d.ts" />
/// <reference path="../types/angularjs/angular.d.ts" />
/// <reference path="../types/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../types/jasmine/jasmine.d.ts" />
/// <reference path="../types/jqueryui/jqueryui.d.ts" />
/// <reference path="../types/lodash/lodash.d.ts" />
/// <reference path="../types/restangular/restangular.d.ts" />
/// <reference path="../types/moment/moment.d.ts" />
/// <reference path="../types/moment-timezone/moment-timezone.d.ts" />
/// <reference path="../types/leaflet/leaflet.d.ts" />
/// <reference path="scripts/Misc.d.ts" />
declare module AngularWeatherApp {
    class AngularWeatherConstants {
        static MODULE: string;
        static CONTROLLERS: string;
        static SERVICES: string;
        static FACTORIES: string;
        static INTERCEPTORS: string;
        static FILTERS: string;
        static CONFIG_JSON_FILE_PATH: string;
        static CONFIG_CONSTANT: string;
        static apiKey: string;
        static serverUrl: string;
    }
}
declare module AngularWeatherApp {
    class MockData {
        static MOCK_WEATHER_DATA: {
            "city": {
                "id": number;
                "name": string;
                "coord": {
                    "lon": number;
                    "lat": number;
                };
                "country": string;
                "population": number;
            };
            "cod": string;
            "message": number;
            "cnt": number;
            "list": {
                "dt": number;
                "temp": {
                    "day": number;
                    "min": number;
                    "max": number;
                    "night": number;
                    "eve": number;
                    "morn": number;
                };
                "pressure": number;
                "humidity": number;
                "weather": {
                    "id": number;
                    "main": string;
                    "description": string;
                    "icon": string;
                }[];
                "speed": number;
                "deg": number;
                "clouds": number;
            }[];
        };
    }
}
declare module AngularWeatherApp {
    class Router {
        initialize($stateProvider: any, $urlRouteProvider: any): void;
    }
}
declare module AngularWeatherApp {
    class Bootstrapper {
        module: ng.IModule;
        router: any;
        constructor(module: ng.IModule, router: any);
        bootstrap(): void;
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider): void;
    }
}
declare module AngularWeatherApp.Services {
    class DemoService {
        static $inject: string[];
        constructor($injector: any);
    }
}
declare module AngularWeatherApp.Controllers {
    class WeatherAppController {
        static $inject: string[];
        constructor($scope: any, DemoService: any);
    }
}
declare module AngularWeatherApp {
    class App {
        module: ng.IModule;
        constructor();
    }
}
