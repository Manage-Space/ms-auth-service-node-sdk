/**
 * ManageSpace Auth API
 * ManageSpace Auth API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AttributeResponse } from './attributeResponse';

export class AdminGetUserResponse {
    /**
    * User ID
    */
    'userId': string;
    /**
    * Array of attributes.
    */
    'userAttributes': Array<AttributeResponse>;
    /**
    * User Created Date
    */
    'userCreatedDate': string;
    /**
    * User Last Modified Date
    */
    'userLastModifiedDate': string;
    /**
    * Whether the user is enabled or not
    */
    'enabled': boolean;
    /**
    * The user status
    */
    'userStatus': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "userAttributes",
            "baseName": "userAttributes",
            "type": "Array<AttributeResponse>"
        },
        {
            "name": "userCreatedDate",
            "baseName": "userCreatedDate",
            "type": "string"
        },
        {
            "name": "userLastModifiedDate",
            "baseName": "userLastModifiedDate",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "userStatus",
            "baseName": "userStatus",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdminGetUserResponse.attributeTypeMap;
    }
}
