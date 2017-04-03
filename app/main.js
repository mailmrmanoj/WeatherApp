var AngularWeatherApp;
(function (AngularWeatherApp) {
    var AngularWeatherConstants = (function () {
        function AngularWeatherConstants() {
        }
        AngularWeatherConstants.MODULE = "angular.weatherApp";
        AngularWeatherConstants.CONTROLLERS = "angular.weatherApp.controllers";
        AngularWeatherConstants.SERVICES = "angular.weatherApp.services";
        AngularWeatherConstants.FACTORIES = "angular.weatherApp.factories";
        AngularWeatherConstants.INTERCEPTORS = "angular.weatherApp.interceptors";
        AngularWeatherConstants.FILTERS = "angular.weatherApp.filters";
        AngularWeatherConstants.CONFIG_JSON_FILE_PATH = "scripts/config.json";
        AngularWeatherConstants.CONFIG_CONSTANT = "configConstant";
        AngularWeatherConstants.apiKey = "279b4be6d54c8bf6ea9b12275a567156";
        AngularWeatherConstants.serverUrl = "http://api.openweathermap.org/data/2.5/";
        return AngularWeatherConstants;
    })();
    AngularWeatherApp.AngularWeatherConstants = AngularWeatherConstants;
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var MockData = (function () {
        function MockData() {
        }
        MockData.MOCK_WEATHER_DATA = {
            "city": {
                "id": 5391959,
                "name": "San Francisco",
                "coord": {
                    "lon": -122.419418,
                    "lat": 37.774929
                },
                "country": "US",
                "population": 0
            },
            "cod": "200",
            "message": 0.0552,
            "cnt": 7,
            "list": [
                {
                    "dt": 1491157800000,
                    "temp": {
                        "day": 15.41,
                        "min": 15.41,
                        "max": 15.41,
                        "night": 15.41,
                        "eve": 15.41,
                        "morn": 15.41
                    },
                    "pressure": 1013.29,
                    "humidity": 89,
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "speed": 2.77,
                    "deg": 242,
                    "clouds": 64
                },
                {
                    "dt": 1491244200000,
                    "temp": {
                        "day": 19.04,
                        "min": 10.1,
                        "max": 19.04,
                        "night": 10.1,
                        "eve": 14.21,
                        "morn": 15.09
                    },
                    "pressure": 1012.86,
                    "humidity": 35,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "02d"
                        }
                    ],
                    "speed": 6.02,
                    "deg": 338,
                    "clouds": 8
                },
                {
                    "dt": 1491330600000,
                    "temp": {
                        "day": 19.24,
                        "min": 9.46,
                        "max": 20.46,
                        "night": 14.12,
                        "eve": 17.63,
                        "morn": 9.46
                    },
                    "pressure": 1009.32,
                    "humidity": 31,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "speed": 7.56,
                    "deg": 351,
                    "clouds": 0
                },
                {
                    "dt": 1491417000000,
                    "temp": {
                        "day": 19.54,
                        "min": 10.99,
                        "max": 23.39,
                        "night": 12.22,
                        "eve": 23.39,
                        "morn": 10.99
                    },
                    "pressure": 1014.11,
                    "humidity": 0,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "speed": 2.62,
                    "deg": 2,
                    "clouds": 4
                },
                {
                    "dt": 1491503400000,
                    "temp": {
                        "day": 19.76,
                        "min": 7.95,
                        "max": 23.79,
                        "night": 11.9,
                        "eve": 23.79,
                        "morn": 7.95
                    },
                    "pressure": 1015.02,
                    "humidity": 0,
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "speed": 0.75,
                    "deg": 105,
                    "clouds": 55
                },
                {
                    "dt": 1491589800000,
                    "temp": {
                        "day": 17.53,
                        "min": 7.5,
                        "max": 20.34,
                        "night": 12.47,
                        "eve": 20.34,
                        "morn": 7.5
                    },
                    "pressure": 1015.8,
                    "humidity": 0,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "speed": 4.6,
                    "deg": 338,
                    "clouds": 0
                },
                {
                    "dt": 1491676200000,
                    "temp": {
                        "day": 18.24,
                        "min": 7.75,
                        "max": 19.92,
                        "night": 9.13,
                        "eve": 19.92,
                        "morn": 7.75
                    },
                    "pressure": 1014.66,
                    "humidity": 0,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "speed": 2.81,
                    "deg": 326,
                    "clouds": 6
                }
            ]
        };
        return MockData;
    })();
    AngularWeatherApp.MockData = MockData;
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Router = (function () {
        function Router() {
        }
        Router.prototype.initialize = function ($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/test");
            $stateProvider
                .state('test', {
                "url": "/test",
                templateUrl: 'views/default.html',
                controller: 'TestController'
            });
        };
        return Router;
    })();
    AngularWeatherApp.Router = Router;
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Bootstrapper = (function () {
        function Bootstrapper(module, router) {
            this.module = module;
            this.router = router;
        }
        Bootstrapper.prototype.bootstrap = function () {
            var _this = this;
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
                    return _this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider);
                }]);
        };
        Bootstrapper.prototype.initializeConfig = function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
            this.router.initialize($stateProvider, $urlRouterProvider);
        };
        return Bootstrapper;
    })();
    AngularWeatherApp.Bootstrapper = Bootstrapper;
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Services;
    (function (Services) {
        var DemoService = (function () {
            function DemoService($injector) {
            }
            DemoService.$inject = ["$injector"];
            return DemoService;
        })();
        Services.DemoService = DemoService;
    })(Services = AngularWeatherApp.Services || (AngularWeatherApp.Services = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
angular.module(AngularWeatherApp.AngularWeatherConstants.SERVICES, []).service(AngularWeatherApp.Services);
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Controllers;
    (function (Controllers) {
        var WeatherAppController = (function () {
            function WeatherAppController($scope, DemoService) {
                $scope.weatherData = AngularWeatherApp.MockData.MOCK_WEATHER_DATA;
            }
            WeatherAppController.$inject = ["$scope", "DemoService"];
            return WeatherAppController;
        })();
        Controllers.WeatherAppController = WeatherAppController;
    })(Controllers = AngularWeatherApp.Controllers || (AngularWeatherApp.Controllers = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    "use strict";
    var App = (function () {
        function App() {
            var dependencies = [AngularWeatherApp.AngularWeatherConstants.SERVICES, AngularWeatherApp.AngularWeatherConstants.CONTROLLERS, "restangular", "ui.router"];
            this.module = angular.module(AngularWeatherApp.AngularWeatherConstants.MODULE, dependencies);
            var router = new AngularWeatherApp.Router();
            var bootstraper = new AngularWeatherApp.Bootstrapper(this.module, router);
            bootstraper.bootstrap();
        }
        return App;
    })();
    AngularWeatherApp.App = App;
    ;
    new App();
})(AngularWeatherApp || (AngularWeatherApp = {}));
angular.module(AngularWeatherApp.AngularWeatherConstants.CONTROLLERS, []).controller(AngularWeatherApp.Controllers);
describe("Weather app controller test", function () {
    var scope, controller, demoService, weatherAppController;
    beforeEach(angular.mock.module("angular.weatherApp"));
    beforeEach(angular.mock.inject(function ($rootScope, $controller, $injector, _$httpBackend_, _$controller_, _$q_) {
        scope = $rootScope.$new();
        demoService = $injector.get('DemoService');
        controller = _$controller_;
        weatherAppController = $controller('WeatherAppController', {
            $scope: scope,
            $rootScope: scope,
            DemoService: demoService
        });
    }));
    it("Check JSON are initialised and defined for scope.weatherData", function () {
        expect(scope.weatherData).toEqual(AngularWeatherApp.MockData.MOCK_WEATHER_DATA);
    });
});
//# sourceMappingURL=main.js.map