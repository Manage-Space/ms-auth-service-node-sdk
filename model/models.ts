import localVarRequest from 'request';

export * from './adminGetUserResponse';
export * from './attributeResponse';
export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseError';
export * from './codeDeliveryDetailsResponse';
export * from './confirmAdminSignUp200Response';
export * from './confirmPasswordResetRequest';
export * from './confirmSignUpRequest';
export * from './createAdmin200Response';
export * from './createAdminPublicRequest';
export * from './createAdminRequest';
export * from './createUserResponse';
export * from './eRoles';
export * from './emailRequest';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './getRoles200Response';
export * from './getUsers200Response';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './login200Response';
export * from './loginUserRequest';
export * from './loginUserResponse';
export * from './logout200Response';
export * from './logoutUserResponse';
export * from './refreshToken200Response';
export * from './refreshTokenRequest';
export * from './refreshTokenResponse';
export * from './resendVerification200Response';
export * from './resetPasswordRequest';
export * from './roleRequest';
export * from './roleResponse';
export * from './siteAssignmentRequest';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';
export * from './userResponse';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AdminGetUserResponse } from './adminGetUserResponse';
import { AttributeResponse } from './attributeResponse';
import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseError } from './baseError';
import { CodeDeliveryDetailsResponse } from './codeDeliveryDetailsResponse';
import { ConfirmAdminSignUp200Response } from './confirmAdminSignUp200Response';
import { ConfirmPasswordResetRequest } from './confirmPasswordResetRequest';
import { ConfirmSignUpRequest } from './confirmSignUpRequest';
import { CreateAdmin200Response } from './createAdmin200Response';
import { CreateAdminPublicRequest } from './createAdminPublicRequest';
import { CreateAdminRequest } from './createAdminRequest';
import { CreateUserResponse } from './createUserResponse';
import { ERoles } from './eRoles';
import { EmailRequest } from './emailRequest';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { GetRoles200Response } from './getRoles200Response';
import { GetUsers200Response } from './getUsers200Response';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { Login200Response } from './login200Response';
import { LoginUserRequest } from './loginUserRequest';
import { LoginUserResponse } from './loginUserResponse';
import { Logout200Response } from './logout200Response';
import { LogoutUserResponse } from './logoutUserResponse';
import { RefreshToken200Response } from './refreshToken200Response';
import { RefreshTokenRequest } from './refreshTokenRequest';
import { RefreshTokenResponse } from './refreshTokenResponse';
import { ResendVerification200Response } from './resendVerification200Response';
import { ResetPasswordRequest } from './resetPasswordRequest';
import { RoleRequest } from './roleRequest';
import { RoleResponse } from './roleResponse';
import { SiteAssignmentRequest } from './siteAssignmentRequest';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';
import { UserResponse } from './userResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ERoles": ERoles,
        "UserResponse.RolesEnum": UserResponse.RolesEnum,
}

let typeMap: {[index: string]: any} = {
    "AdminGetUserResponse": AdminGetUserResponse,
    "AttributeResponse": AttributeResponse,
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseError": BaseError,
    "CodeDeliveryDetailsResponse": CodeDeliveryDetailsResponse,
    "ConfirmAdminSignUp200Response": ConfirmAdminSignUp200Response,
    "ConfirmPasswordResetRequest": ConfirmPasswordResetRequest,
    "ConfirmSignUpRequest": ConfirmSignUpRequest,
    "CreateAdmin200Response": CreateAdmin200Response,
    "CreateAdminPublicRequest": CreateAdminPublicRequest,
    "CreateAdminRequest": CreateAdminRequest,
    "CreateUserResponse": CreateUserResponse,
    "EmailRequest": EmailRequest,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "GetRoles200Response": GetRoles200Response,
    "GetUsers200Response": GetUsers200Response,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "Login200Response": Login200Response,
    "LoginUserRequest": LoginUserRequest,
    "LoginUserResponse": LoginUserResponse,
    "Logout200Response": Logout200Response,
    "LogoutUserResponse": LogoutUserResponse,
    "RefreshToken200Response": RefreshToken200Response,
    "RefreshTokenRequest": RefreshTokenRequest,
    "RefreshTokenResponse": RefreshTokenResponse,
    "ResendVerification200Response": ResendVerification200Response,
    "ResetPasswordRequest": ResetPasswordRequest,
    "RoleRequest": RoleRequest,
    "RoleResponse": RoleResponse,
    "SiteAssignmentRequest": SiteAssignmentRequest,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
    "UserResponse": UserResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
public accessToken: string | (() => string) = process.env.MS_TOKEN || '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
