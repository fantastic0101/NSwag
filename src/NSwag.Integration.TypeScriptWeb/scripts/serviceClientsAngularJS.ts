﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v9.12.6294.32106 (NJsonSchema v8.15.6294.32079) (http://NSwag.org)
// </auto-generated>
//----------------------


export class GeoClient {
    private http: ng.IHttpService;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor($http: ng.IHttpService, baseUrl?: string) {
        this.http = $http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:13452";
    }

    fromBodyTest(location: GeoPoint): ng.IPromise<void> {
        let url_ = this.baseUrl + "/api/Geo/FromBodyTest";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(location ? location.toJSON() : null);

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processFromBodyTest(response);
        }, (response) => {
            if (response.status)
                return this.processFromBodyTest(response);
            throw response;
        });
    }

    protected processFromBodyTest(response: any): void {
        const responseText = response.data;
        const status = response.status; 

        if (status === 204) {
            return null;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    fromUriTest(latitude: number, longitude: number): ng.IPromise<void> {
        let url_ = this.baseUrl + "/api/Geo/FromUriTest?";
        if (latitude === null)
            throw new Error("The parameter 'latitude' cannot be null.");
        else if (latitude !== undefined)
            url_ += "Latitude=" + encodeURIComponent("" + latitude) + "&"; 
        if (longitude === null)
            throw new Error("The parameter 'longitude' cannot be null.");
        else if (longitude !== undefined)
            url_ += "Longitude=" + encodeURIComponent("" + longitude) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processFromUriTest(response);
        }, (response) => {
            if (response.status)
                return this.processFromUriTest(response);
            throw response;
        });
    }

    protected processFromUriTest(response: any): void {
        const responseText = response.data;
        const status = response.status; 

        if (status === 204) {
            return null;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    addPolygon(points: GeoPoint[]): ng.IPromise<void> {
        let url_ = this.baseUrl + "/api/Geo/AddPolygon";
        url_ = url_.replace(/[?&]$/, "");

        let contentData_: any = [];
        if (points) {
            for (let item of points)
                contentData_.push(item.toJSON());
        }
        const content_ = JSON.stringify(points ? contentData_ : null);

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processAddPolygon(response);
        }, (response) => {
            if (response.status)
                return this.processAddPolygon(response);
            throw response;
        });
    }

    protected processAddPolygon(response: any): void {
        const responseText = response.data;
        const status = response.status; 

        if (status === 204) {
            return null;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    filter(currentStates: string[]): ng.IPromise<void> {
        let url_ = this.baseUrl + "/api/Geo/Filter?";
        if (currentStates !== undefined)
            currentStates.forEach(item => { url_ += "currentStates=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processFilter(response);
        }, (response) => {
            if (response.status)
                return this.processFilter(response);
            throw response;
        });
    }

    protected processFilter(response: any): void {
        const responseText = response.data;
        const status = response.status; 

        if (status === 204) {
            return null;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    reverse(values: string[]): ng.IPromise<string[]> {
        let url_ = this.baseUrl + "/api/Geo/Reverse?";
        if (values !== undefined)
            values.forEach(item => { url_ += "values=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processReverse(response);
        }, (response) => {
            if (response.status)
                return this.processReverse(response);
            throw response;
        });
    }

    protected processReverse(response: any): string[] {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: string[] | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(item);
            }
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    refresh(): ng.IPromise<void> {
        let url_ = this.baseUrl + "/api/Geo/Refresh";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processRefresh(response);
        }, (response) => {
            if (response.status)
                return this.processRefresh(response);
            throw response;
        });
    }

    protected processRefresh(response: any): void {
        const responseText = response.data;
        const status = response.status; 

        if (status === 204) {
            return null;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    uploadFile(file: FileParameter): ng.IPromise<boolean> {
        let url_ = this.baseUrl + "/api/Geo/UploadFile";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (file !== null)
            content_.append("file", file.data, file.fileName ? file.fileName : "file");

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processUploadFile(response);
        }, (response) => {
            if (response.status)
                return this.processUploadFile(response);
            throw response;
        });
    }

    protected processUploadFile(response: any): boolean {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: boolean | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    uploadFiles(files: FileParameter[]): ng.IPromise<void> {
        let url_ = this.baseUrl + "/api/Geo/UploadFiles";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (files !== null)
            files.forEach(item_ => content_.append("files", item_.data, item_.fileName ? item_.fileName : "files") );

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processUploadFiles(response);
        }, (response) => {
            if (response.status)
                return this.processUploadFiles(response);
            throw response;
        });
    }

    protected processUploadFiles(response: any): void {
        const responseText = response.data;
        const status = response.status; 

        if (status === 204) {
            return null;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    saveItems(request: GenericRequestOfAddressAndPerson): ng.IPromise<void> {
        let url_ = this.baseUrl + "/api/Geo/SaveItems";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request ? request.toJSON() : null);

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processSaveItems(response);
        }, (response) => {
            if (response.status)
                return this.processSaveItems(response);
            throw response;
        });
    }

    protected processSaveItems(response: any): void {
        const responseText = response.data;
        const status = response.status; 

        if (status === 204) {
            return null;
        } else if (status === 450) {
            let result450: Exception | null = null;
            let resultData450 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result450 = resultData450 ? Exception.fromJS(resultData450) : null;
            this.throwException("A server error occurred.", status, responseText, result450);
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    getUploadedFile(id: number, override: boolean): ng.IPromise<Blob> {
        let url_ = this.baseUrl + "/api/Geo/GetUploadedFile/{id}?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        if (override === null)
            throw new Error("The parameter 'override' cannot be null.");
        else if (override !== undefined)
            url_ += "override=" + encodeURIComponent("" + override) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "GET",
			responseType: "blob",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
            }
        };

        return this.http(options_).then((response) => {
            return this.processGetUploadedFile(response);
        }, (response) => {
            if (response.status)
                return this.processGetUploadedFile(response);
            throw response;
        });
    }

    protected processGetUploadedFile(response: any): Blob {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: Blob | null = null;
            result200 = new Blob([response], { type: "application/octet-stream" });
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        if(result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response, null);
    }
}

export class PersonsClient {
    private http: ng.IHttpService;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor($http: ng.IHttpService, baseUrl?: string) {
        this.http = $http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:13452";
    }

    getAll(): ng.IPromise<Person[]> {
        let url_ = this.baseUrl + "/api/Persons";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "GET",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processGetAll(response);
        }, (response) => {
            if (response.status)
                return this.processGetAll(response);
            throw response;
        });
    }

    protected processGetAll(response: any): Person[] {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: Person[] | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Person.fromJS(item));
            }
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    add(person: Person): ng.IPromise<void> {
        let url_ = this.baseUrl + "/api/Persons";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(person ? person.toJSON() : null);

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processAdd(response);
        }, (response) => {
            if (response.status)
                return this.processAdd(response);
            throw response;
        });
    }

    protected processAdd(response: any): void {
        const responseText = response.data;
        const status = response.status; 

        if (status === 204) {
            return null;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    find(gender: Gender): ng.IPromise<Person[]> {
        let url_ = this.baseUrl + "/api/Persons/find/{gender}";
        if (gender === undefined || gender === null)
            throw new Error("The parameter 'gender' must be defined.");
        url_ = url_.replace("{gender}", encodeURIComponent("" + gender)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processFind(response);
        }, (response) => {
            if (response.status)
                return this.processFind(response);
            throw response;
        });
    }

    protected processFind(response: any): Person[] {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: Person[] | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Person.fromJS(item));
            }
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    findOptional(gender: Gender): ng.IPromise<Person[]> {
        let url_ = this.baseUrl + "/api/Persons/find2?";
        if (gender === undefined)
            throw new Error("The parameter 'gender' must be defined.");
        else
            url_ += "gender=" + encodeURIComponent("" + gender) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processFindOptional(response);
        }, (response) => {
            if (response.status)
                return this.processFindOptional(response);
            throw response;
        });
    }

    protected processFindOptional(response: any): Person[] {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: Person[] | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Person.fromJS(item));
            }
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    get(id: string): ng.IPromise<Person> {
        let url_ = this.baseUrl + "/api/Persons/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "GET",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processGet(response);
        }, (response) => {
            if (response.status)
                return this.processGet(response);
            throw response;
        });
    }

    protected processGet(response: any): Person {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: Person | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? Person.fromJS(resultData200) : null;
            return result200;
        } else if (status === 500) {
            let result500: PersonNotFoundException | null = null;
            let resultData500 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
            this.throwException("A server error occurred.", status, responseText, result500);
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    delete(id: string): ng.IPromise<void> {
        let url_ = this.baseUrl + "/api/Persons/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "DELETE",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processDelete(response);
        }, (response) => {
            if (response.status)
                return this.processDelete(response);
            throw response;
        });
    }

    protected processDelete(response: any): void {
        const responseText = response.data;
        const status = response.status; 

        if (status === 204) {
            return null;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    throw(id: string): ng.IPromise<Person> {
        let url_ = this.baseUrl + "/api/Persons/Throw?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processThrow(response);
        }, (response) => {
            if (response.status)
                return this.processThrow(response);
            throw response;
        });
    }

    protected processThrow(response: any): Person {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: Person | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? Person.fromJS(resultData200) : null;
            return result200;
        } else if (status === 500) {
            let result500: PersonNotFoundException | null = null;
            let resultData500 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
            this.throwException("A server error occurred.", status, responseText, result500);
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    /**
     * Gets the name of a person.
     * @id The person ID.
     * @return The person's name.
     */
    getName(id: string): ng.IPromise<string> {
        let url_ = this.baseUrl + "/api/Persons/{id}/Name";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = "";

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "GET",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processGetName(response);
        }, (response) => {
            if (response.status)
                return this.processGetName(response);
            throw response;
        });
    }

    protected processGetName(response: any): string {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: string | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200;
        } else if (status === 500) {
            let result500: PersonNotFoundException | null = null;
            let resultData500 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result500 = resultData500 ? PersonNotFoundException.fromJS(resultData500) : null;
            this.throwException("A server error occurred.", status, responseText, result500);
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    addXml(person: string): ng.IPromise<string> {
        let url_ = this.baseUrl + "/api/Persons/AddXml";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = person;

        var options_ = <ng.IRequestConfig>{
            url: url_,
            method: "POST",
            data: content_,
            transformResponse: [], 
            headers: {
                "Content-Type": "application/xml; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            }
        };

        return this.http(options_).then((response) => {
            return this.processAddXml(response);
        }, (response) => {
            if (response.status)
                return this.processAddXml(response);
            throw response;
        });
    }

    protected processAddXml(response: any): string {
        const responseText = response.data;
        const status = response.status; 

        if (status === 200) {
            let result200: string | null = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        if(result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response, null);
    }
}

export class GeoPoint {
    latitude: number | undefined;
    longitude: number | undefined;

    init(data?: any) {
        if (data !== undefined) {
            this.latitude = data["Latitude"];
            this.longitude = data["Longitude"];
        }
    }

    static fromJS(data: any): GeoPoint {
        let result = new GeoPoint();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["Latitude"] = this.latitude;
        data["Longitude"] = this.longitude;
        return data; 
    }
}

export class GenericRequestOfAddressAndPerson {
    item1: Address | null | undefined;
    item2: Person | null | undefined;

    init(data?: any) {
        if (data !== undefined) {
            this.item1 = data["Item1"] ? Address.fromJS(data["Item1"]) : undefined;
            this.item2 = data["Item2"] ? Person.fromJS(data["Item2"]) : undefined;
        }
    }

    static fromJS(data: any): GenericRequestOfAddressAndPerson {
        let result = new GenericRequestOfAddressAndPerson();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["Item1"] = this.item1 ? this.item1.toJSON() : undefined;
        data["Item2"] = this.item2 ? this.item2.toJSON() : undefined;
        return data; 
    }
}

export class Address {
    isPrimary: boolean | undefined;
    city: string | null | undefined;

    init(data?: any) {
        if (data !== undefined) {
            this.isPrimary = data["IsPrimary"];
            this.city = data["City"];
        }
    }

    static fromJS(data: any): Address {
        let result = new Address();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["IsPrimary"] = this.isPrimary;
        data["City"] = this.city;
        return data; 
    }
}

export class Person {
    id: string | undefined;
    /** Gets or sets the first name. */
    firstName: string | undefined;
    /** Gets or sets the last name. */
    lastName: string | undefined;
    gender: Gender | undefined;
    dateOfBirth: Date | undefined;
    weight: number | undefined;
    height: number | undefined;
    age: number | undefined;
    averageSleepTime: string | undefined;
    address: Address | undefined = new Address();
    children: Person[] | undefined = [];
    skills: { [key: string] : SkillLevel; } | null | undefined;

    protected _discriminator: string;

    constructor() {
        this._discriminator = "Person";
    }

    init(data?: any) {
        if (data !== undefined) {
            this.id = data["Id"];
            this.firstName = data["FirstName"];
            this.lastName = data["LastName"];
            this.gender = data["Gender"];
            this.dateOfBirth = data["DateOfBirth"] ? new Date(data["DateOfBirth"].toString()) : undefined;
            this.weight = data["Weight"];
            this.height = data["Height"];
            this.age = data["Age"];
            this.averageSleepTime = data["AverageSleepTime"];
            this.address = data["Address"] ? Address.fromJS(data["Address"]) : new Address();
            if (data["Children"] && data["Children"].constructor === Array) {
                this.children = [];
                for (let item of data["Children"])
                    this.children.push(Person.fromJS(item));
            }
            if (data["Skills"]) {
                this.skills = {};
                for (let key in data["Skills"]) {
                    if (data["Skills"].hasOwnProperty(key))
                        this.skills[key] = data["Skills"][key];
                }
            }
        }
    }

    static fromJS(data: any): Person {
        if (data["discriminator"] === "Teacher") {
            let result = new Teacher();
            result.init(data);
            return result;
        }
        let result = new Person();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["discriminator"] = this._discriminator; 
        data["Id"] = this.id;
        data["FirstName"] = this.firstName;
        data["LastName"] = this.lastName;
        data["Gender"] = this.gender;
        data["DateOfBirth"] = this.dateOfBirth ? this.dateOfBirth.toISOString() : undefined;
        data["Weight"] = this.weight;
        data["Height"] = this.height;
        data["Age"] = this.age;
        data["AverageSleepTime"] = this.averageSleepTime;
        data["Address"] = this.address ? this.address.toJSON() : undefined;
        if (this.children && this.children.constructor === Array) {
            data["Children"] = [];
            for (let item of this.children)
                data["Children"].push(item.toJSON());
        }
        if (this.skills) {
            data["Skills"] = {};
            for (let key in this.skills) {
                if (this.skills.hasOwnProperty(key))
                    data["Skills"][key] = this.skills[key];
            }
        }
        return data; 
    }
}

export enum Gender {
    Male = <any>"Male", 
    Female = <any>"Female", 
}

export enum SkillLevel {
    Low = 0, 
    Medium = 1, 
    Height = 2, 
}

export class Teacher extends Person {
    course: string | null | undefined;
    skillLevel: SkillLevel | undefined = SkillLevel.Medium;

    constructor() {
        super();
        this._discriminator = "Teacher";
    }

    init(data?: any) {
        super.init(data);
        if (data !== undefined) {
            this.course = data["Course"];
            this.skillLevel = data["SkillLevel"];
        }
    }

    static fromJS(data: any): Teacher {
        let result = new Teacher();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["Course"] = this.course;
        data["SkillLevel"] = this.skillLevel;
        super.toJSON(data);
        return data; 
    }
}

export class Exception {
    message: string | null | undefined;
    innerException: Exception | null | undefined;
    stackTrace: string | null | undefined;
    source: string | null | undefined;

    init(data?: any) {
        if (data !== undefined) {
            this.message = data["Message"];
            this.innerException = data["InnerException"] ? Exception.fromJS(data["InnerException"]) : undefined;
            this.stackTrace = data["StackTrace"];
            this.source = data["Source"];
        }
    }

    static fromJS(data: any): Exception {
        let result = new Exception();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["Message"] = this.message;
        data["InnerException"] = this.innerException ? this.innerException.toJSON() : undefined;
        data["StackTrace"] = this.stackTrace;
        data["Source"] = this.source;
        return data; 
    }
}

export class PersonNotFoundException extends Exception {
    id: string | undefined;

    init(data?: any) {
        super.init(data);
        if (data !== undefined) {
            this.id = data["id"];
        }
    }

    static fromJS(data: any): PersonNotFoundException {
        let result = new PersonNotFoundException();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id;
        super.toJSON(data);
        return data; 
    }
}

export interface FileParameter
{
    data: any;
    fileName: string;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result: any; 

    constructor(message: string, status: number, response: string, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}