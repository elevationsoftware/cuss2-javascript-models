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
import {ApiClient} from '../ApiClient';
import {ApplicationID} from './ApplicationID';

/**
 * The ApplicationTransfer model module.
 * @module model/ApplicationTransfer
 * @version 1.0.0
 */
export class ApplicationTransfer {
  /**
   * Constructs a new <code>ApplicationTransfer</code>.
   * Applications and platforms use the CUSS 2 Application Transfer Structure for transferring control from one application to another.
   * @alias module:model/ApplicationTransfer
   * @class
   * @param transferRequestType {module:model/ApplicationTransfer.TransferRequestTypeEnum} Indicates whether to START an application or to CANCEL a pending transfer
   * @param targetApplicationID {module:model/ApplicationID} 
   * @param languageID {String} As per RFC3066.- Please refer also to: http://www.lingoes.net/en/translator/langcode.htm
   */
  constructor(transferRequestType, targetApplicationID, languageID) {
    this.transferRequestType = transferRequestType;
    this.targetApplicationID = targetApplicationID;
    this.languageID = languageID;
  }

  /**
   * Constructs a <code>ApplicationTransfer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationTransfer} obj Optional instance to populate.
   * @return {module:model/ApplicationTransfer} The populated <code>ApplicationTransfer</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApplicationTransfer();
      if (data.hasOwnProperty('transferRequestType'))
        obj.transferRequestType = ApiClient.convertToType(data['transferRequestType'], 'String');
      if (data.hasOwnProperty('targetApplicationID'))
        obj.targetApplicationID = ApplicationID.constructFromObject(data['targetApplicationID']);
      if (data.hasOwnProperty('applicationBrand'))
        obj.applicationBrand = ApiClient.convertToType(data['applicationBrand'], 'String');
      if (data.hasOwnProperty('languageID'))
        obj.languageID = ApiClient.convertToType(data['languageID'], 'String');
      if (data.hasOwnProperty('transferData'))
        obj.transferData = ApiClient.convertToType(data['transferData'], 'Blob');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>transferRequestType</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationTransfer.TransferRequestTypeEnum = {
  /**
   * value: "START"
   * @const
   */
  START: "START",

  /**
   * value: "CANCEL"
   * @const
   */
  CANCEL: "CANCEL"
};
/**
 * Indicates whether to START an application or to CANCEL a pending transfer
 * @member {module:model/ApplicationTransfer.TransferRequestTypeEnum} transferRequestType
 */
ApplicationTransfer.prototype.transferRequestType = undefined;

/**
 * @member {module:model/ApplicationID} targetApplicationID
 */
ApplicationTransfer.prototype.targetApplicationID = undefined;

/**
 * The application can use this value to change its look, feel, or behavior.
 * @member {String} applicationBrand
 */
ApplicationTransfer.prototype.applicationBrand = undefined;

/**
 * As per RFC3066.- Please refer also to: http://www.lingoes.net/en/translator/langcode.htm
 * @member {String} languageID
 */
ApplicationTransfer.prototype.languageID = undefined;

/**
 * Any data to be exchanged between callers and callees.
 * @member {Blob} transferData
 */
ApplicationTransfer.prototype.transferData = undefined;

