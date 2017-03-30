///<reference path="Reference.ts"/>

module AngularWeatherApp.Services {
    export class CrudService {
        restangular: restangular.IService;
        private dialogService: any;
        private toastr: any;
        private arrayHelper: any;
        static $inject = ["$q", "Restangular"];

        constructor(public $q: ng.IQService, restangular: restangular.IService) {
            this.restangular = restangular;
        }

        deleteByFunctionWithPropertyName(id: any, propertyName: string, entityList: any[], entityName: String, functionToExecute): ng.IPromise<any> {
            var deferred = this.$q.defer();
            var dialogOptions = {
                closeButtonText: "No",
                actionButtonText: "Yes",
                headerText: "Confirm Delete",
                bodyText: "Are you sure you want to delete this " + entityName + "?",
                callback: () => this.executeDeleteByFunctionWithPropertyName(id, propertyName, entityList, functionToExecute).then(responseData => {
                    deferred.resolve(responseData);
                }, error => {
                    deferred.reject(error);
                })
            };
            this.dialogService.showModalDialog({}, dialogOptions);
            return deferred.promise;
        }

        executeDeleteByFunctionWithPropertyName = (id: number, propertyName: string, entityList: Array<any>, functionToExecute) => {
            var deferred = this.$q.defer();
            functionToExecute(id).then((responseData) => {
                if (responseData.status === true) {
                    this.arrayHelper.removeItemFromArrayByPropertyName(entityList, propertyName, id);
                }
                deferred.resolve(responseData);
            }, error => {
                deferred.reject(error);
            });
            return deferred.promise;
        };
    }
}
