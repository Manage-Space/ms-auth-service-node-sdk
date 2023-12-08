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

export class RoleRequest {
    /**
    * Role codenames associated with user.
    */
    'roles': Array<ERoles>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<ERoles>"
        }    ];

    static getAttributeTypeMap() {
        return RoleRequest.attributeTypeMap;
    }
}

