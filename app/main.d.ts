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
        static DIRECTIVES: string;
        static CONTROLLERS: string;
        static SERVICES: string;
        static FACTORIES: string;
        static INTERCEPTORS: string;
        static FILTERS: string;
        static FACADES: string;
        static CONFIG_JSON_FILE_PATH: string;
        static CONFIG_CONSTANT: string;
        static apiKey: string;
        static serverUrl: string;
    }
}
declare module AngularWeatherApp.Facades {
    import services = AngularWeatherApp.Services;
    interface ISystemFacade {
        crudService: services.CrudService;
        $qService: ng.IQService;
        restangularService: any;
    }
    class SystemFacade implements ISystemFacade {
        crudService: AngularWeatherApp.Services.CrudService;
        $qService: ng.IQService;
        restangularService: any;
        static $inject: string[];
        constructor(crudService: AngularWeatherApp.Services.CrudService, $qService: ng.IQService, restangularService: any);
    }
}
declare module AngularWeatherApp.Facades {
}
declare module AngularWeatherApp.Repositories.Constants {
    class FilterOperator {
        static EQUALS: string;
    }
}
declare module AngularWeatherApp.Repositories.Constants {
    enum LogicalOperator {
        AND = 0,
        OR = 1,
    }
}
declare module AngularWeatherApp.Repositories.Constants {
    class SortingOperator {
        static DESCENDING_ORDER: string;
        static ASCENDING_ORDER: string;
    }
}
declare module AngularWeatherApp.Repositories {
    class BaseReadonlyRepository {
        systemFacade: any;
        baseUrl: string;
        entityName: string;
        $injector: any;
        resource: any;
        restangularConfigurationService: any;
        getById: (id: number) => ng.IPromise<any>;
        constructor(systemFacade: any, baseUrl: string, entityName: string, $injector: any);
    }
}
declare module AngularWeatherApp.Repositories {
    class BaseCrudRepository extends BaseReadonlyRepository {
        systemFacade: any;
        baseUrl: string;
        entityName: string;
        add: (entity: any) => ng.IPromise<any>;
        addWithUrl: (entity: any, url: String) => ng.IPromise<any>;
        update: (entity: any, url: String) => ng.IPromise<any>;
        remove: (url: String) => ng.IPromise<any>;
        constructor(systemFacade: any, baseUrl: string, entityName: string, $injector: any);
    }
}
declare module AngularWeatherApp.Repositories.Helpers {
    class DataManager {
        systemFacader: any;
        getUnRestangularData: (data) => any;
        resolveData: (instance, apiMethod, parameters: Array<any>) => ng.IPromise<any>;
        resolveDataForFilter: (instance: any, apiMethod: any, parameters: Array<any>) => ng.IPromise<any>;
        clearCache: () => ng.IPromise<any>;
        constructor(systemFacader: any);
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
        initRestangular(RestangularProvider: any): void;
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider): void;
    }
}
declare module AngularWeatherApp.Services {
    class BaseApi extends AngularWeatherApp.Repositories.BaseCrudRepository {
        constructor($injector: any, entityName: string);
    }
}
declare module AngularWeatherApp.Services {
    class CrudService {
        $q: ng.IQService;
        restangular: restangular.IService;
        private dialogService;
        private toastr;
        private arrayHelper;
        static $inject: string[];
        constructor($q: ng.IQService, restangular: restangular.IService);
        deleteByFunctionWithPropertyName(id: any, propertyName: string, entityList: any[], entityName: String, functionToExecute: any): ng.IPromise<any>;
        executeDeleteByFunctionWithPropertyName: (id: number, propertyName: string, entityList: any[], functionToExecute: any) => ng.IPromise<{}>;
    }
}
declare module AngularWeatherApp.Services {
    class DemoService extends BaseApi {
        static $inject: string[];
        constructor($injector: any);
    }
}
declare module AngularWeatherApp.Controllers {
    class WeatherAppController {
        static $inject: string[];
        constructor($scope: any, $document: any, $injector: any, DemoService: any);
    }
}
declare module AngularWeatherApp.Directives {
    class demoDirective {
        constructor();
    }
}
declare module AngularWeatherApp {
    class App {
        module: ng.IModule;
        constructor();
    }
}
