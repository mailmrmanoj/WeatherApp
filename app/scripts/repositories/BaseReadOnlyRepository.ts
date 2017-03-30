
///<reference path="Reference.ts"/>
module AngularWeatherApp.Repositories {

    export class BaseReadonlyRepository {
        resource;
        restangularConfigurationService;
        getById: (id: number) => ng.IPromise<any>;
        constructor(public systemFacade: any, public baseUrl: string, public entityName: string,
            public $injector: any) {
            var dataManager = new AngularWeatherApp.Repositories.Helpers.DataManager(systemFacade);
            this.restangularConfigurationService = systemFacade.restangularService.withConfig((restangularConfigurer) => {
                restangularConfigurer.setBaseUrl(baseUrl);
            });
            this.resource = this.restangularConfigurationService.all(entityName);
            function getObjectPropertyName(propertyName: string) {
                return propertyName.substring(0, propertyName.length - 2);
            }
            this.getById = (id) => {
                var deferred = this.systemFacade.$qService.defer();
                this.resource.get(id).then((responseData) => {
                    //    this.checkDependenciesAndResolve(deferred, responseData);
                }, (error) => {
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        }
    }
}