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
import {CUSSDataTypes} from './CUSSDataTypes';
import {ComponentCharacteristicsConveyorSBD} from './ComponentCharacteristicsConveyorSBD';
import {ComponentCharacteristicsDeviceHelpInstruction} from './ComponentCharacteristicsDeviceHelpInstruction';
import {ComponentCharacteristicsDisplayType} from './ComponentCharacteristicsDisplayType';
import {ComponentCharacteristicsDocumentBin} from './ComponentCharacteristicsDocumentBin';
import {ComponentCharacteristicsNavigationType} from './ComponentCharacteristicsNavigationType';
import {DeviceTypes} from './DeviceTypes';
import {MediaTypes} from './MediaTypes';

/**
 * The ComponentCharacteristics model module.
 * @module model/ComponentCharacteristics
 * @version 1.0.0
 */
export class ComponentCharacteristics {
  /**
   * Constructs a new <code>ComponentCharacteristics</code>.
   * @alias module:model/ComponentCharacteristics
   * @class
   * @param mediaTypesList {Array.<module:model/MediaTypes>} A list of media type identifiers.
   */
  constructor(mediaTypesList) {
    this.mediaTypesList = mediaTypesList;
  }

  /**
   * Constructs a <code>ComponentCharacteristics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ComponentCharacteristics} obj Optional instance to populate.
   * @return {module:model/ComponentCharacteristics} The populated <code>ComponentCharacteristics</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ComponentCharacteristics();
      if (data.hasOwnProperty('deviceHelpInstruction'))
        obj.deviceHelpInstruction = ComponentCharacteristicsDeviceHelpInstruction.constructFromObject(data['deviceHelpInstruction']);
      if (data.hasOwnProperty('dsTypesList'))
        obj.dsTypesList = ApiClient.convertToType(data['dsTypesList'], [CUSSDataTypes]);
      if (data.hasOwnProperty('mediaTypesList'))
        obj.mediaTypesList = ApiClient.convertToType(data['mediaTypesList'], [MediaTypes]);
      if (data.hasOwnProperty('deviceTypesList'))
        obj.deviceTypesList = ApiClient.convertToType(data['deviceTypesList'], [DeviceTypes]);
      if (data.hasOwnProperty('navigationType'))
        obj.navigationType = ComponentCharacteristicsNavigationType.constructFromObject(data['navigationType']);
      if (data.hasOwnProperty('displayType'))
        obj.displayType = ComponentCharacteristicsDisplayType.constructFromObject(data['displayType']);
      if (data.hasOwnProperty('itpsVersion'))
        obj.itpsVersion = ApiClient.convertToType(data['itpsVersion'], 'String');
      if (data.hasOwnProperty('svgVersion'))
        obj.svgVersion = ApiClient.convertToType(data['svgVersion'], 'String');
      if (data.hasOwnProperty('supportsColor'))
        obj.supportsColor = ApiClient.convertToType(data['supportsColor'], 'Boolean');
      if (data.hasOwnProperty('documentBin'))
        obj.documentBin = ComponentCharacteristicsDocumentBin.constructFromObject(data['documentBin']);
      if (data.hasOwnProperty('conveyorSBD'))
        obj.conveyorSBD = ComponentCharacteristicsConveyorSBD.constructFromObject(data['conveyorSBD']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ComponentCharacteristicsDeviceHelpInstruction} deviceHelpInstruction
 */
ComponentCharacteristics.prototype.deviceHelpInstruction = undefined;

/**
 * A list of data types identifiers.
 * @member {Array.<module:model/CUSSDataTypes>} dsTypesList
 */
ComponentCharacteristics.prototype.dsTypesList = undefined;

/**
 * A list of media type identifiers.
 * @member {Array.<module:model/MediaTypes>} mediaTypesList
 */
ComponentCharacteristics.prototype.mediaTypesList = undefined;

/**
 * A list of device type identifiers.
 * @member {Array.<module:model/DeviceTypes>} deviceTypesList
 */
ComponentCharacteristics.prototype.deviceTypesList = undefined;

/**
 * @member {module:model/ComponentCharacteristicsNavigationType} navigationType
 */
ComponentCharacteristics.prototype.navigationType = undefined;

/**
 * @member {module:model/ComponentCharacteristicsDisplayType} displayType
 */
ComponentCharacteristics.prototype.displayType = undefined;

/**
 * ITPS/AEA version supported by printers (BTP/BPP). - The minimum version must be [current version -1]. Example: 2018
 * @member {String} itpsVersion
 */
ComponentCharacteristics.prototype.itpsVersion = undefined;

/**
 * Scalable Vector Graphics (SVG) 1.1. -  Please refer also to: https://www.w3.org/TR/SVG11/
 * @member {String} svgVersion
 */
ComponentCharacteristics.prototype.svgVersion = undefined;

/**
 * If true, the baggage tag printer supports color printing (black and red).
 * @member {Boolean} supportsColor
 */
ComponentCharacteristics.prototype.supportsColor = undefined;

/**
 * @member {module:model/ComponentCharacteristicsDocumentBin} documentBin
 */
ComponentCharacteristics.prototype.documentBin = undefined;

/**
 * @member {module:model/ComponentCharacteristicsConveyorSBD} conveyorSBD
 */
ComponentCharacteristics.prototype.conveyorSBD = undefined;
