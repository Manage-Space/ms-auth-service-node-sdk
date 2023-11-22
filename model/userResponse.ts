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
import { RoleResponse } from './roleResponse';

export class UserResponse {
    /**
    * User Id
    */
    'userId': string;
    /**
    * First name
    */
    'firstName': string;
    /**
    * Middle name
    */
    'middleName'?: string;
    /**
    * Last name
    */
    'lastName': string;
    /**
    * User email
    */
    'email': string;
    /**
    * User mobile phone number, including country code
    */
    'mobileNumber': string;
    /**
    * Org Id
    */
    'orgId': string;
    /**
    * Created by
    */
    'createdBy': string;
    /**
    * Updated by
    */
    'updatedBy'?: string;
    /**
    * Created at.
    */
    'createdAt': string;
    /**
    * Updated at.
    */
    'updatedAt'?: string;
    /**
    * Role definitions associated with user.
    */
    'roles': Array<RoleResponse>;
    /**
    * A list of sites associated with this user.
    */
    'assignedSites': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
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
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        },
        {
            "name": "updatedBy",
            "baseName": "updatedBy",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<RoleResponse>"
        },
        {
            "name": "assignedSites",
            "baseName": "assignedSites",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserResponse.attributeTypeMap;
    }
}

