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

/**
 * The ComponentCharacteristicsConveyorSBD model module.
 * @module model/ComponentCharacteristicsConveyorSBD
 * @version 1.0.0
 */
export class ComponentCharacteristicsConveyorSBD {
  /**
   * Constructs a new <code>ComponentCharacteristicsConveyorSBD</code>.
   * ConveyorSBD characteristics. - Older definitions have been removed after deprecation.
   * @alias module:model/ComponentCharacteristicsConveyorSBD
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ComponentCharacteristicsConveyorSBD</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ComponentCharacteristicsConveyorSBD} obj Optional instance to populate.
   * @return {module:model/ComponentCharacteristicsConveyorSBD} The populated <code>ComponentCharacteristicsConveyorSBD</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ComponentCharacteristicsConveyorSBD();
      if (data.hasOwnProperty('maxWeight'))
        obj.maxWeight = ApiClient.convertToType(data['maxWeight'], 'Number');
      if (data.hasOwnProperty('maxWidth'))
        obj.maxWidth = ApiClient.convertToType(data['maxWidth'], 'Number');
      if (data.hasOwnProperty('maxHeight'))
        obj.maxHeight = ApiClient.convertToType(data['maxHeight'], 'Number');
      if (data.hasOwnProperty('maxLength'))
        obj.maxLength = ApiClient.convertToType(data['maxLength'], 'Number');
      if (data.hasOwnProperty('maxBags'))
        obj.maxBags = ApiClient.convertToType(data['maxBags'], 'Number');
      if (data.hasOwnProperty('barrierCapable'))
        obj.barrierCapable = ApiClient.convertToType(data['barrierCapable'], 'Boolean');
      if (data.hasOwnProperty('userInterferenceCapable'))
        obj.userInterferenceCapable = ApiClient.convertToType(data['userInterferenceCapable'], 'Boolean');
      if (data.hasOwnProperty('safetyIntrusionCapable'))
        obj.safetyIntrusionCapable = ApiClient.convertToType(data['safetyIntrusionCapable'], 'Boolean');
      if (data.hasOwnProperty('onewayForward'))
        obj.onewayForward = ApiClient.convertToType(data['onewayForward'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The maximum weight of the baggage (in grams).
 * @member {Number} maxWeight
 */
ComponentCharacteristicsConveyorSBD.prototype.maxWeight = undefined;

/**
 * The maximum width of baggage (in millimeters).
 * @member {Number} maxWidth
 */
ComponentCharacteristicsConveyorSBD.prototype.maxWidth = undefined;

/**
 * The maximum height of baggage (in millimeters).
 * @member {Number} maxHeight
 */
ComponentCharacteristicsConveyorSBD.prototype.maxHeight = undefined;

/**
 * The maximum length of baggage (in millimeters).
 * @member {Number} maxLength
 */
ComponentCharacteristicsConveyorSBD.prototype.maxLength = undefined;

/**
 * The maximum number of bags a conveyor can handle.
 * @member {Number} maxBags
 */
ComponentCharacteristicsConveyorSBD.prototype.maxBags = undefined;

/**
 * If true, conveyor has a security barrier (for user safety).
 * @member {Boolean} barrierCapable
 */
ComponentCharacteristicsConveyorSBD.prototype.barrierCapable = undefined;

/**
 * If true, conveyor system can detect intrusions at the front/user side (insertion).
 * @member {Boolean} userInterferenceCapable
 */
ComponentCharacteristicsConveyorSBD.prototype.userInterferenceCapable = undefined;

/**
 * If true, conveyor system can detect intrusions behind the front/user side (verification/parking).
 * @member {Boolean} safetyIntrusionCapable
 */
ComponentCharacteristicsConveyorSBD.prototype.safetyIntrusionCapable = undefined;

/**
 * If true, conveyor can only move in forward direction.
 * @member {Boolean} onewayForward
 */
ComponentCharacteristicsConveyorSBD.prototype.onewayForward = undefined;

