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

export class SiteAssignmentRequest {
    /**
    * Array of site ids for the specific organization.
    */
    'sites': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sites",
            "baseName": "sites",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return SiteAssignmentRequest.attributeTypeMap;
    }
}
