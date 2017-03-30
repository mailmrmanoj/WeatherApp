///<reference path="../Reference.ts"/>
module AngularWeatherApp.Repositories.Helpers {
    //Credits: https://www.stevefenton.co.uk/Content/Blog/Date/201304/Blog/Obtaining-A-Class-Name-At-Runtime-In-TypeScript/
    class Describer {
        static getName(inputClass) {
            var funcNameRegex = /function (.{1,})\(/;
            var results = (funcNameRegex).exec((<any>inputClass).constructor.toString());
            return (results && results.length > 1) ? results[1] : "";
        }
    }

    export class DataManager {
        getUnRestangularData: (data) => any;
        resolveData: (instance, apiMethod, parameters: Array<any>) => ng.IPromise<any>;
        resolveDataForFilter: (instance: any, apiMethod: any, parameters: Array<any>) => ng.IPromise<any>;
        clearCache: () => ng.IPromise<any>;
        constructor(public systemFacader) {

            this.getUnRestangularData = (data: any) => {
                var unRestangularisedData;
                if (data instanceof Object) {
                    //  unRestangularisedData = this.systemFacade.restangularService.stripRestangular(data);
                } else {
                    unRestangularisedData = data;
                }
                return unRestangularisedData;
            }
        }
    }
}