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

export class ConfirmSignUpRequest {
    /**
    * A valid email.
    */
    'email': string;
    /**
    * A valid confirmation code from Cognito.
    */
    'code': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConfirmSignUpRequest.attributeTypeMap;
    }
}

