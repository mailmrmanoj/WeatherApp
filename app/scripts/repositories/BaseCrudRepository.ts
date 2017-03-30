///<reference path="Reference.ts"/>
module AngularWeatherApp.Repositories {

    export class BaseCrudRepository extends BaseReadonlyRepository {

        add: (entity: any) => ng.IPromise<any>;
        addWithUrl: (entity: any, url: String) => ng.IPromise<any>;
        update: (entity: any, url: String) => ng.IPromise<any>;
        remove: (url: String) => ng.IPromise<any>;

        constructor(public systemFacade, public baseUrl: string, public entityName: string, $injector: any) {
            super(systemFacade, baseUrl, entityName, $injector);
            this.add = (entity) => {
                var deferred = this.systemFacade.$qService.defer();
                this.resource.post(entity).then((responseData) => {
                    //  var unRestangularisedData = this.getUnRestangularData(responseData);
                    //  deferred.resolve(unRestangularisedData);
                }, (error) => {
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        }
    }
}