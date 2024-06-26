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
import {ApplicationActivation} from './ApplicationActivation.js';
import {BaggageData} from './BaggageData.js';
import {CommonUseBiometricMessage} from './CommonUseBiometricMessage.js';
import {CommonUsePaymentMessage} from './CommonUsePaymentMessage.js';
import {ComponentList} from './ComponentList.js';
import {DataRecordList} from './DataRecordList.js';
import {EnvironmentLevel} from './EnvironmentLevel.js';
import {MessageCodes} from './MessageCodes.js';

/**
 * The PlatformDataPayload model module.
 * @module model/PlatformDataPayload
 * @version 1.0.0
 */
export class PlatformDataPayload {
  /**
   * Constructs a new <code>PlatformDataPayload</code>.
   * The (optional) payload of this message
   * @alias module:model/PlatformDataPayload
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlatformDataPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlatformDataPayload} obj Optional instance to populate.
   * @return {module:model/PlatformDataPayload} The populated <code>PlatformDataPayload</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlatformDataPayload();
      if (data.hasOwnProperty('applicationActivation'))
        obj.applicationActivation = ApplicationActivation.constructFromObject(data['applicationActivation']);
      if (data.hasOwnProperty('environmentLevel'))
        obj.environmentLevel = EnvironmentLevel.constructFromObject(data['environmentLevel']);
      if (data.hasOwnProperty('componentList'))
        obj.componentList = ComponentList.constructFromObject(data['componentList']);
      if (data.hasOwnProperty('dataRecords'))
        obj.dataRecords = DataRecordList.constructFromObject(data['dataRecords']);
      if (data.hasOwnProperty('bagdropData'))
        obj.bagdropData = BaggageData.constructFromObject(data['bagdropData']);
      if (data.hasOwnProperty('paymentData'))
        obj.paymentData = CommonUsePaymentMessage.constructFromObject(data['paymentData']);
      if (data.hasOwnProperty('biometricData'))
        obj.biometricData = CommonUseBiometricMessage.constructFromObject(data['biometricData']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ApplicationActivation} applicationActivation
 */
PlatformDataPayload.prototype.applicationActivation = undefined;

/**
 * @member {module:model/EnvironmentLevel} environmentLevel
 */
PlatformDataPayload.prototype.environmentLevel = undefined;

/**
 * @member {module:model/ComponentList} componentList
 */
PlatformDataPayload.prototype.componentList = undefined;

/**
 * @member {module:model/DataRecordList} dataRecords
 */
PlatformDataPayload.prototype.dataRecords = undefined;

/**
 * @member {module:model/BaggageData} bagdropData
 */
PlatformDataPayload.prototype.bagdropData = undefined;

/**
 * @member {module:model/CommonUsePaymentMessage} paymentData
 */
PlatformDataPayload.prototype.paymentData = undefined;

/**
 * @member {module:model/CommonUseBiometricMessage} biometricData
 */
PlatformDataPayload.prototype.biometricData = undefined;

