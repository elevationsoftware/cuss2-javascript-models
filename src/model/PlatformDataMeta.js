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
import {ApplicationID} from './ApplicationID.js';
import {ApplicationState} from './ApplicationState.js';
import {ComponentID} from './ComponentID.js';
import {ComponentState} from './ComponentState.js';
import {PassengerSessionID} from './PassengerSessionID.js';
import {PlatformDataMetaEventClassification} from './PlatformDataMetaEventClassification.js';
import {PlatformDirectives} from './PlatformDirectives.js';
import {RequestID} from './RequestID.js';

/**
 * The PlatformDataMeta model module.
 * @module model/PlatformDataMeta
 * @version 1.0.0
 */
export class PlatformDataMeta {
  /**
   * Constructs a new <code>PlatformDataMeta</code>.
   * The META data of this message
   * @alias module:model/PlatformDataMeta
   * @class
   * @param deviceID  {String} The aggregated identifier of the device/touchpoint as configured by the operator.
   * @param timeStamp {Date} Time stamp in UTC format.
   * @param passengerSessionID {module:model/PassengerSessionID} 
   * @param applicationID {module:model/ApplicationID} 
   * @param currentApplicationState {module:model/ApplicationState} 
   * @param messageCode {module:model/MessageCodes} 
   */
  constructor(timeStamp, passengerSessionID, applicationID, currentApplicationState, messageCode) {
    this.timeStamp = timeStamp;
    this.passengerSessionID = passengerSessionID;
    this.applicationID = applicationID;
    this.currentApplicationState = currentApplicationState;
    this.messageCode = messageCode;
  }

  /**
   * Constructs a <code>PlatformDataMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlatformDataMeta} obj Optional instance to populate.
   * @return {module:model/PlatformDataMeta} The populated <code>PlatformDataMeta</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlatformDataMeta();
      if (data.hasOwnProperty('requestID'))
        obj.requestID = RequestID.constructFromObject(data['requestID']);
      if (data.hasOwnProperty('timeStamp'))
        obj.timeStamp = ApiClient.convertToType(data['timeStamp'], 'Date');
      if (data.hasOwnProperty('passengerSessionID'))
        obj.passengerSessionID = PassengerSessionID.constructFromObject(data['passengerSessionID']);
      if (data.hasOwnProperty('applicationID'))
        obj.applicationID = ApplicationID.constructFromObject(data['applicationID']);
      if (data.hasOwnProperty('componentID'))
        obj.componentID = ComponentID.constructFromObject(data['componentID']);
      if (data.hasOwnProperty('componentState'))
        obj.componentState = ComponentState.constructFromObject(data['componentState']);
      if (data.hasOwnProperty('currentApplicationState'))
        obj.currentApplicationState = ApplicationState.constructFromObject(data['currentApplicationState']);
      if (data.hasOwnProperty('messageCode'))
        obj.messageCode = MessageCodes.constructFromObject(data['messageCode']);
      if (data.hasOwnProperty('eventClassification'))
        obj.eventClassification = PlatformDataMetaEventClassification.constructFromObject(data['eventClassification']);
      if (data.hasOwnProperty('platformDirective'))
        obj.platformDirective = PlatformDirectives.constructFromObject(data['platformDirective']);
      if (data.hasOwnProperty('deviceID'))
        obj.deviceID =ApiClient.convertToType(data['deviceID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/RequestID} requestID
 */
PlatformDataMeta.prototype.requestID = undefined;

/**
 * Time stamp in UTC format.
 * @member {Date} timeStamp
 */
PlatformDataMeta.prototype.timeStamp = undefined;

/**
 * @member {module:model/PassengerSessionID} passengerSessionID
 */
PlatformDataMeta.prototype.passengerSessionID = undefined;

/**
 * @member {module:model/ApplicationID} applicationID
 */
PlatformDataMeta.prototype.applicationID = undefined;

/**
 * @member {module:model/ComponentID} componentID
 */
PlatformDataMeta.prototype.componentID = undefined;

/**
 * @member {module:model/ComponentState} componentState
 */
PlatformDataMeta.prototype.componentState = undefined;

/**
 * @member {module:model/ApplicationState} currentApplicationState
 */
PlatformDataMeta.prototype.currentApplicationState = undefined;

/**
 * @member {module:model/MessageCodes} messageCode
 */
PlatformDataMeta.prototype.messageCode = undefined;

/**
 * @member {module:model/PlatformDataMetaEventClassification} eventClassification
 */
PlatformDataMeta.prototype.eventClassification = undefined;

/**
 * @member {module:model/PlatformDirectives} platformDirective
 */
PlatformDataMeta.prototype.platformDirective = undefined;

/**
 * The aggregated identifier of the device/touchpoint as configured by the operator.
 * @member {String} deviceID
 */
PlatformDataMeta.prototype.deviceID = undefined;

