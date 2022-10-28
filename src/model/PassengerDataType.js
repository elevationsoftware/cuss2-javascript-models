/*
 * Common Use Self Service V2 API Definition (current working version)
 * <h3>Definition of the new CUSS2 API.</h3><p>This API definition describes IATA Common Use Self Service (IATA RP 1706c), a standard that allows multiple airlines or entities to share physical kiosks or other hardware devices to offer self-services to their passengers. These services include, but are not limited to passenger check-in functionality and self-service baggage drop off. The standard also defines how airlines and other application suppliers can develop CUSS-compliant applications that are able to run on any device whose platform is CUSS-compliant.<p>In its official release the API definition is accompanied by the CUSS Specification (CUSS-TS), describing in human readable form (textual and graphical) the concepts, requirements, interaction, workflows and behavior for both CUSS platforms and CUSS applications, and the CUSS Implementation Guide (CUSS-IG) describing best practices and giving examples on how to implement CUSS compliant platforms- and applications.<p>The API requires and includes further schema definitions/domains as listed below<p>- CUSS2 Basic Schemas<br>- CUSS2 Self Bag Drop<br>- CUSS2 Biometrics<br>- CUSS2 Payments<br>- CUSS2 Illumination<p>The IATA Common Use Group (CUG) and the CUSS Technical Solution Group (CUSS-TSG) maintain this API.<p>For bug reports, design issues and/or any other feedback send your e-mail to:<p><a href=\"mailto:c6bb2228.iataonline.onmicrosoft.com@emea.teams.ms\">**CUSS-TSG @ IATA**</a><p>-----------<p>**General and important note on handling timeouts:**<p>In contrast to earlier CUSS versions applications are now responsible for tracking and handling the time and timeouts for any directive that may require longer execution. Applications shall use the cancel() directive to terminate a too long pending call.<p>----------<p>&copy; International Air Transport Association (IATA) 2021. - All rights reserved.<p>THIS API DEFINITION AND ALL RELATED DOMAINS ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS, WITHOUT WARRANTY OF ANY KIND.<p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IATA DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, QUALITY, PERFORMANCE, ACCURACY, COMPLETENESS AND NON-INFRINGEMENT OF THIRD PARTY RIGHTS.<p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IATA SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION OR ANY OTHER PECUNIARY LOSS (EVEN IF LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), HOWEVER CAUSED, AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF, OR RELATED TO, THIS LICENSE OR THE SPECIFICATIONS, INCLUDING THE USE OR PERFORMANCE OF THE SPECIFICATIONS AND OF ANY PRODUCTS OR SERVICES IMPLEMENTING, IN WHOLE OR IN PART, THE SPECIFICATIONS.<p>THE IATA PSC DATA EXCHANGE SPECIFICATIONS LICENSE TERMS APPLY TO ANY USE OF THIS API AND RELATED DOMAINS.<p>----------- 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {PassengerDataTypeAssociationDataList} from './PassengerDataTypeAssociationDataList.js';
import {PassengerDataTypePassengerBiometricsData} from './PassengerDataTypePassengerBiometricsData.js';
import {PassengerDataTypePassengerMRZData} from './PassengerDataTypePassengerMRZData.js';
import {PassengerIDType} from './PassengerIDType.js';

/**
 * The PassengerDataType model module.
 * @module model/PassengerDataType
 * @version 1.0.0
 */
export class PassengerDataType {
  /**
   * Constructs a new <code>PassengerDataType</code>.
   * Biometric function request passenger data.
   * @alias module:model/PassengerDataType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PassengerDataType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PassengerDataType} obj Optional instance to populate.
   * @return {module:model/PassengerDataType} The populated <code>PassengerDataType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PassengerDataType();
      if (data.hasOwnProperty('passengerIDs'))
        obj.passengerIDs = ApiClient.convertToType(data['passengerIDs'], [PassengerIDType]);
      if (data.hasOwnProperty('passengerFamilyName'))
        obj.passengerFamilyName = ApiClient.convertToType(data['passengerFamilyName'], 'String');
      if (data.hasOwnProperty('passengerGivenNames'))
        obj.passengerGivenNames = ApiClient.convertToType(data['passengerGivenNames'], 'String');
      if (data.hasOwnProperty('passengerMRZData'))
        obj.passengerMRZData = PassengerDataTypePassengerMRZData.constructFromObject(data['passengerMRZData']);
      if (data.hasOwnProperty('passengerBiometricsData'))
        obj.passengerBiometricsData = PassengerDataTypePassengerBiometricsData.constructFromObject(data['passengerBiometricsData']);
      if (data.hasOwnProperty('associationDataList'))
        obj.associationDataList = PassengerDataTypeAssociationDataList.constructFromObject(data['associationDataList']);
    }
    return obj;
  }
}

/**
 * Can be a maximum of 2 IDs (client and provider).
 * @member {Array.<module:model/PassengerIDType>} passengerIDs
 */
PassengerDataType.prototype.passengerIDs = undefined;

/**
 * Passenger's family name (last name or surname).
 * @member {String} passengerFamilyName
 */
PassengerDataType.prototype.passengerFamilyName = undefined;

/**
 * Passenger's given name (christian or first names).
 * @member {String} passengerGivenNames
 */
PassengerDataType.prototype.passengerGivenNames = undefined;

/**
 * @member {module:model/PassengerDataTypePassengerMRZData} passengerMRZData
 */
PassengerDataType.prototype.passengerMRZData = undefined;

/**
 * @member {module:model/PassengerDataTypePassengerBiometricsData} passengerBiometricsData
 */
PassengerDataType.prototype.passengerBiometricsData = undefined;

/**
 * @member {module:model/PassengerDataTypeAssociationDataList} associationDataList
 */
PassengerDataType.prototype.associationDataList = undefined;

