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
import { ERoles } from './eRoles';

export class CreateAdminRequest {
    /**
    * User first name
    */
    'firstName': string;
    /**
    * User last name
    */
    'lastName': string;
    /**
    * Middle initial
    */
    'middleInitial'?: string;
    /**
    * User email
    */
    'email': string;
    /**
    * User mobile phone number, including country code
    */
    'mobileNumber'?: string;
    /**
    * Password
    */
    'password': string;
    /**
    * Role codenames associated with user.
    */
    'roles': Array<ERoles>;
    /**
    * Optional array of site ids for the specific organization.
    */
    'sites'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "middleInitial",
            "baseName": "middleInitial",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<ERoles>"
        },
        {
            "name": "sites",
            "baseName": "sites",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CreateAdminRequest.attributeTypeMap;
    }
}

