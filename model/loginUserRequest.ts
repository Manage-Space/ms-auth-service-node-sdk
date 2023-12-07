/**
 * ManageSpace Auth API
 * ManageSpace Auth API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class LoginUserRequest {
    /**
    * A valid email.
    */
    'email': string;
    /**
    * Current password.
    */
    'password': string;
    /**
    * new password(this is an optional argument needed when user was created by an another user that has idOrgAdmin)
    */
    'newPassword'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "newPassword",
            "baseName": "newPassword",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LoginUserRequest.attributeTypeMap;
    }
}

