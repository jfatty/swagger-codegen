/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at <a href=\"http://swagger.io\">http://swagger.io</a> or on irc.freenode.net, #swagger.  For this sample, you can use the api key \"special-key\" to test the authorization filters
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@wordnik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as $ from 'jquery';
import * as models from '../model/models';
import { COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


export class UserApi {
    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders: Array<string> = [];
    public configuration: Configuration = new Configuration();

    constructor(basePath?: string, configuration?: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    private extendObj<T1, T2 extends T1>(objA: T2, objB: T2): T1|T2 {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }

    /**
     * Create user
     * This can only be done by the logged in user.
     * @param body Created user object
     */
    public createUser(body?: models.User): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/user';

        let queryParameters: any = {};
        let headerParams: any = {};


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(body);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Creates list of users with given input array
     * 
     * @param body List of user object
     */
    public createUsersWithArrayInput(body?: Array<models.User>): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/user/createWithArray';

        let queryParameters: any = {};
        let headerParams: any = {};


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(body);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Creates list of users with given input array
     * 
     * @param body List of user object
     */
    public createUsersWithListInput(body?: Array<models.User>): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/user/createWithList';

        let queryParameters: any = {};
        let headerParams: any = {};


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(body);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param username The name that needs to be deleted
     */
    public deleteUser(username: string): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/user/{username}'.replace('{' + 'username' + '}', String(username));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling deleteUser.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'DELETE',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Get user by user name
     * 
     * @param username The name that needs to be fetched. Use user1 for testing. 
     */
    public getUserByName(username: string): JQueryPromise<{ response: JQueryXHR; body: models.User;  }> {
        let localVarPath = this.basePath + '/user/{username}'.replace('{' + 'username' + '}', String(username));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling getUserByName.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: models.User, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Logs user into the system
     * 
     * @param username The user name for login
     * @param password The password for login in clear text
     */
    public loginUser(username?: string, password?: string): JQueryPromise<{ response: JQueryXHR; body: string;  }> {
        let localVarPath = this.basePath + '/user/login';

        let queryParameters: any = {};
        let headerParams: any = {};


        if (username !== null && username !== undefined) {
            queryParameters['username'] = <string><any>username;
        }
        if (password !== null && password !== undefined) {
            queryParameters['password'] = <string><any>password;
        }

        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: string, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Logs out current logged in user session
     * 
     */
    public logoutUser(): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/user/logout';

        let queryParameters: any = {};
        let headerParams: any = {};

        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Updated user
     * This can only be done by the logged in user.
     * @param username name that need to be deleted
     * @param body Updated user object
     */
    public updateUser(username: string, body?: models.User): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/user/{username}'.replace('{' + 'username' + '}', String(username));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling updateUser.');
        }



        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'PUT',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(body);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

}
