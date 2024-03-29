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
    * Middle initial
    */
    'middleInitial': string | null;
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
    'updatedBy': string | null;
    /**
    * Created at.
    */
    'createdAt': Date;
    /**
    * Updated at.
    */
    'updatedAt': Date | null;
    /**
    * Role codenames associated with user.
    */
    'roles': Array<UserResponse.RolesEnum>;
    /**
    * A list of sites associated with this user.
    */
    'assignedSites': Array<string>;

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
            "name": "middleInitial",
            "baseName": "middleInitial",
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
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<UserResponse.RolesEnum>"
        },
        {
            "name": "assignedSites",
            "baseName": "assignedSites",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return UserResponse.attributeTypeMap;
    }
}

export namespace UserResponse {
    export enum RolesEnum {
        Ga = <any> 'GA',
        Oa = <any> 'OA',
        Sa = <any> 'SA',
        M = <any> 'M',
        O = <any> 'O',
        W = <any> 'W',
        Sm = <any> 'SM',
        P = <any> 'P'
    }
}
