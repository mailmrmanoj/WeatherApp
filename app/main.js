var AngularWeatherApp;
(function (AngularWeatherApp) {
    var AngularWeatherConstants = (function () {
        function AngularWeatherConstants() {
        }
        AngularWeatherConstants.MODULE = "angular.weatherApp";
        AngularWeatherConstants.DIRECTIVES = "angular.weatherApp.directives";
        AngularWeatherConstants.CONTROLLERS = "angular.weatherApp.controllers";
        AngularWeatherConstants.SERVICES = "angular.weatherApp.services";
        AngularWeatherConstants.FACTORIES = "angular.weatherApp.factories";
        AngularWeatherConstants.INTERCEPTORS = "angular.weatherApp.interceptors";
        AngularWeatherConstants.FILTERS = "angular.weatherApp.filters";
        AngularWeatherConstants.FACADES = "angular.weatherApp.facades";
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
    var Facades;
    (function (Facades) {
        var SystemFacade = (function () {
            function SystemFacade(crudService, $qService, restangularService) {
                this.crudService = crudService;
                this.$qService = $qService;
                this.restangularService = restangularService;
            }
            SystemFacade.$inject = ["CrudService", "$q", "Restangular"
            ];
            return SystemFacade;
        })();
        Facades.SystemFacade = SystemFacade;
    })(Facades = AngularWeatherApp.Facades || (AngularWeatherApp.Facades = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Facades;
    (function (Facades) {
        angular.module(AngularWeatherApp.AngularWeatherConstants.FACADES, []).service(AngularWeatherApp.Facades);
    })(Facades = AngularWeatherApp.Facades || (AngularWeatherApp.Facades = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Repositories;
    (function (Repositories) {
        var Constants;
        (function (Constants) {
            var FilterOperator = (function () {
                function FilterOperator() {
                }
                FilterOperator.EQUALS = "EQUALS";
                return FilterOperator;
            })();
            Constants.FilterOperator = FilterOperator;
        })(Constants = Repositories.Constants || (Repositories.Constants = {}));
    })(Repositories = AngularWeatherApp.Repositories || (AngularWeatherApp.Repositories = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Repositories;
    (function (Repositories) {
        var Constants;
        (function (Constants) {
            (function (LogicalOperator) {
                LogicalOperator[LogicalOperator["AND"] = 0] = "AND";
                LogicalOperator[LogicalOperator["OR"] = 1] = "OR";
            })(Constants.LogicalOperator || (Constants.LogicalOperator = {}));
            var LogicalOperator = Constants.LogicalOperator;
        })(Constants = Repositories.Constants || (Repositories.Constants = {}));
    })(Repositories = AngularWeatherApp.Repositories || (AngularWeatherApp.Repositories = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Repositories;
    (function (Repositories) {
        var Constants;
        (function (Constants) {
            var SortingOperator = (function () {
                function SortingOperator() {
                }
                SortingOperator.DESCENDING_ORDER = "DESC";
                SortingOperator.ASCENDING_ORDER = "ASC";
                return SortingOperator;
            })();
            Constants.SortingOperator = SortingOperator;
        })(Constants = Repositories.Constants || (Repositories.Constants = {}));
    })(Repositories = AngularWeatherApp.Repositories || (AngularWeatherApp.Repositories = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Repositories;
    (function (Repositories) {
        var BaseReadonlyRepository = (function () {
            function BaseReadonlyRepository(systemFacade, baseUrl, entityName, $injector) {
                var _this = this;
                this.systemFacade = systemFacade;
                this.baseUrl = baseUrl;
                this.entityName = entityName;
                this.$injector = $injector;
                var dataManager = new AngularWeatherApp.Repositories.Helpers.DataManager(systemFacade);
                this.restangularConfigurationService = systemFacade.restangularService.withConfig(function (restangularConfigurer) {
                    restangularConfigurer.setBaseUrl(baseUrl);
                });
                this.resource = this.restangularConfigurationService.all(entityName);
                function getObjectPropertyName(propertyName) {
                    return propertyName.substring(0, propertyName.length - 2);
                }
                this.getById = function (id) {
                    var deferred = _this.systemFacade.$qService.defer();
                    _this.resource.get(id).then(function (responseData) {
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
            }
            return BaseReadonlyRepository;
        })();
        Repositories.BaseReadonlyRepository = BaseReadonlyRepository;
    })(Repositories = AngularWeatherApp.Repositories || (AngularWeatherApp.Repositories = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Repositories;
    (function (Repositories) {
        var BaseCrudRepository = (function (_super) {
            __extends(BaseCrudRepository, _super);
            function BaseCrudRepository(systemFacade, baseUrl, entityName, $injector) {
                var _this = this;
                _super.call(this, systemFacade, baseUrl, entityName, $injector);
                this.systemFacade = systemFacade;
                this.baseUrl = baseUrl;
                this.entityName = entityName;
                this.add = function (entity) {
                    var deferred = _this.systemFacade.$qService.defer();
                    _this.resource.post(entity).then(function (responseData) {
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
            }
            return BaseCrudRepository;
        })(Repositories.BaseReadonlyRepository);
        Repositories.BaseCrudRepository = BaseCrudRepository;
    })(Repositories = AngularWeatherApp.Repositories || (AngularWeatherApp.Repositories = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Repositories;
    (function (Repositories) {
        var Helpers;
        (function (Helpers) {
            var Describer = (function () {
                function Describer() {
                }
                Describer.getName = function (inputClass) {
                    var funcNameRegex = /function (.{1,})\(/;
                    var results = (funcNameRegex).exec(inputClass.constructor.toString());
                    return (results && results.length > 1) ? results[1] : "";
                };
                return Describer;
            })();
            var DataManager = (function () {
                function DataManager(systemFacader) {
                    this.systemFacader = systemFacader;
                    this.getUnRestangularData = function (data) {
                        var unRestangularisedData;
                        if (data instanceof Object) {
                        }
                        else {
                            unRestangularisedData = data;
                        }
                        return unRestangularisedData;
                    };
                }
                return DataManager;
            })();
            Helpers.DataManager = DataManager;
        })(Helpers = Repositories.Helpers || (Repositories.Helpers = {}));
    })(Repositories = AngularWeatherApp.Repositories || (AngularWeatherApp.Repositories = {}));
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
        Bootstrapper.prototype.initRestangular = function (RestangularProvider) {
            RestangularProvider.setParentless(true, []);
            if (localStorage.getItem("apiKey")) {
                RestangularProvider.setDefaultHeaders({ apiKey: localStorage.getItem("apiKey") });
            }
            else {
                location.href = "index.html#/home";
            }
        };
        Bootstrapper.prototype.initializeConfig = function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
            this.initRestangular(RestangularProvider);
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
        var BaseApi = (function (_super) {
            __extends(BaseApi, _super);
            function BaseApi($injector, entityName) {
                var systemFacade = $injector.get("SystemFacade");
                _super.call(this, systemFacade, AngularWeatherApp.AngularWeatherConstants.serverUrl, entityName, $injector);
            }
            return BaseApi;
        })(AngularWeatherApp.Repositories.BaseCrudRepository);
        Services.BaseApi = BaseApi;
    })(Services = AngularWeatherApp.Services || (AngularWeatherApp.Services = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Services;
    (function (Services) {
        var CrudService = (function () {
            function CrudService($q, restangular) {
                var _this = this;
                this.$q = $q;
                this.executeDeleteByFunctionWithPropertyName = function (id, propertyName, entityList, functionToExecute) {
                    var deferred = _this.$q.defer();
                    functionToExecute(id).then(function (responseData) {
                        if (responseData.status === true) {
                            _this.arrayHelper.removeItemFromArrayByPropertyName(entityList, propertyName, id);
                        }
                        deferred.resolve(responseData);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                this.restangular = restangular;
            }
            CrudService.prototype.deleteByFunctionWithPropertyName = function (id, propertyName, entityList, entityName, functionToExecute) {
                var _this = this;
                var deferred = this.$q.defer();
                var dialogOptions = {
                    closeButtonText: "No",
                    actionButtonText: "Yes",
                    headerText: "Confirm Delete",
                    bodyText: "Are you sure you want to delete this " + entityName + "?",
                    callback: function () { return _this.executeDeleteByFunctionWithPropertyName(id, propertyName, entityList, functionToExecute).then(function (responseData) {
                        deferred.resolve(responseData);
                    }, function (error) {
                        deferred.reject(error);
                    }); }
                };
                this.dialogService.showModalDialog({}, dialogOptions);
                return deferred.promise;
            };
            CrudService.$inject = ["$q", "Restangular"];
            return CrudService;
        })();
        Services.CrudService = CrudService;
    })(Services = AngularWeatherApp.Services || (AngularWeatherApp.Services = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Services;
    (function (Services) {
        var DemoService = (function (_super) {
            __extends(DemoService, _super);
            function DemoService($injector) {
                _super.call(this, $injector, "customerAddress");
            }
            DemoService.$inject = ["$injector"];
            return DemoService;
        })(Services.BaseApi);
        Services.DemoService = DemoService;
    })(Services = AngularWeatherApp.Services || (AngularWeatherApp.Services = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
angular.module(AngularWeatherApp.AngularWeatherConstants.SERVICES, []).service(AngularWeatherApp.Services);
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Controllers;
    (function (Controllers) {
        var WeatherAppController = (function () {
            function WeatherAppController($scope, $document, $injector, DemoService) {
                $scope.weatherData =
                    {
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
                                "dt": 1490817600,
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
                                "dt": 1490904000,
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
                                "dt": 1490990400,
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
                                "dt": 1491076800,
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
                                "dt": 1491163200,
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
                                "dt": 1491249600,
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
                                "dt": 1491336000,
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
                $scope.activity = [
                    {
                        what: 'Brunch this weekend?',
                        who: 'Ali Conners',
                        when: '3:08PM',
                        notes: " I'll be in your neighborhood doing errands"
                    },
                    {
                        what: 'Summer BBQ',
                        who: 'to Alex, Scott, Jennifer',
                        when: '3:08PM',
                        notes: "Wish I could come out but I'm out of town this weekend"
                    },
                    {
                        what: 'Oui Oui',
                        who: 'Sandra Adams',
                        when: '3:08PM',
                        notes: "Do you have Paris recommendations? Have you ever been?"
                    },
                    {
                        what: 'Birthday Gift',
                        who: 'Trevor Hansen',
                        when: '3:08PM',
                        notes: "Have any ideas of what we should get Heidi for her birthday?"
                    },
                    {
                        what: 'Recipe to try',
                        who: 'Brian Holt',
                        when: '3:08PM',
                        notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
                    },
                ];
            }
            WeatherAppController.$inject = ["$scope", "$document", "$injector", "DemoService"];
            return WeatherAppController;
        })();
        Controllers.WeatherAppController = WeatherAppController;
    })(Controllers = AngularWeatherApp.Controllers || (AngularWeatherApp.Controllers = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
var AngularWeatherApp;
(function (AngularWeatherApp) {
    var Directives;
    (function (Directives) {
        var demoDirective = (function () {
            function demoDirective() {
                return {
                    restrict: "E",
                    template: '<div class="nopadding col-xs-12 col-sm-4 color-gray record-show">    Showing <label class="record-color-label">{{(paginationSettings.currentPage*paginationSettings.pageSize)-(paginationSettings.pageSize-1)}}-{{(paginationSettings.currentPage*paginationSettings.pageSize)>paginationSettings.totalItems?paginationSettings.totalItems:(paginationSettings.currentPage*paginationSettings.pageSize)}}</label> of <label class="record-color-label">{{paginationSettings.totalItems}}</label> records</div>'
                };
            }
            return demoDirective;
        })();
        Directives.demoDirective = demoDirective;
    })(Directives = AngularWeatherApp.Directives || (AngularWeatherApp.Directives = {}));
})(AngularWeatherApp || (AngularWeatherApp = {}));
angular.module(AngularWeatherApp.AngularWeatherConstants.DIRECTIVES, []).controller(AngularWeatherApp.Directives);
var AngularWeatherApp;
(function (AngularWeatherApp) {
    "use strict";
    var App = (function () {
        function App() {
            var dependencies = [AngularWeatherApp.AngularWeatherConstants.DIRECTIVES, , AngularWeatherApp.AngularWeatherConstants.FACADES, AngularWeatherApp.AngularWeatherConstants.SERVICES, AngularWeatherApp.AngularWeatherConstants.CONTROLLERS, "restangular", "ui.router"];
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
//# sourceMappingURL=main.js.map