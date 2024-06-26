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
 * Enum class MessageCodes.
 * @enum {String}
 * @readonly
 */
const MessageCodes = {
  /**
   * value: "OK"
   * @const
   */
  OK: "OK",

  /**
   * value: "CANCELLED"
   * @const
   */
  CANCELLED: "CANCELLED",

  /**
   * value: "WRONG_SYSTEM_STATE"
   * @const
   */
  WRONG_SYSTEM_STATE: "WRONG_SYSTEM_STATE",

  /**
   * value: "WRONG_APPLICATION_STATE"
   * @const
   */
  WRONG_APPLICATION_STATE: "WRONG_APPLICATION_STATE",

  /**
   * value: "OUT_OF_SEQUENCE"
   * @const
   */
  OUT_OF_SEQUENCE: "OUT_OF_SEQUENCE",

  /**
   * value: "TIMEOUT"
   * @const
   */
  TIMEOUT: "TIMEOUT",

  /**
   * value: "SESSION_TIMEOUT"
   * @const
   */
  SESSION_TIMEOUT: "SESSION_TIMEOUT",

  /**
   * value: "KILL_TIMEOUT"
   * @const
   */
  KILL_TIMEOUT: "KILL_TIMEOUT",

  /**
   * value: "SOFTWARE_ERROR"
   * @const
   */
  SOFTWARE_ERROR: "SOFTWARE_ERROR",

  /**
   * value: "CRITICAL_SOFTWARE_ERROR"
   * @const
   */
  CRITICAL_SOFTWARE_ERROR: "CRITICAL_SOFTWARE_ERROR",

  /**
   * value: "CONFIGURATION_ERROR"
   * @const
   */
  CONFIGURATION_ERROR: "CONFIGURATION_ERROR",

  /**
   * value: "FORMAT_ERROR"
   * @const
   */
  FORMAT_ERROR: "FORMAT_ERROR",

  /**
   * value: "LENGTH_ERROR"
   * @const
   */
  LENGTH_ERROR: "LENGTH_ERROR",

  /**
   * value: "DATA_MISSING"
   * @const
   */
  DATA_MISSING: "DATA_MISSING",

  /**
   * value: "DATA_PRESENT"
   * @const
   */
  DATA_PRESENT: "DATA_PRESENT",

  /**
   * value: "CONSUMABLES"
   * @const
   */
  CONSUMABLES: "CONSUMABLES",

  /**
   * value: "THRESHOLD_ERROR"
   * @const
   */
  THRESHOLD_ERROR: "THRESHOLD_ERROR",

  /**
   * value: "THRESHOLD_USAGE"
   * @const
   */
  THRESHOLD_USAGE: "THRESHOLD_USAGE",

  /**
   * value: "HARDWARE_ERROR"
   * @const
   */
  HARDWARE_ERROR: "HARDWARE_ERROR",

  /**
   * value: "NOT_REACHABLE"
   * @const
   */
  NOT_REACHABLE: "NOT_REACHABLE",

  /**
   * value: "NOT_RESPONDING"
   * @const
   */
  NOT_RESPONDING: "NOT_RESPONDING",

  /**
   * value: "MEDIA_JAMMED"
   * @const
   */
  MEDIA_JAMMED: "MEDIA_JAMMED",

  /**
   * value: "MEDIA_MISPLACED"
   * @const
   */
  MEDIA_MISPLACED: "MEDIA_MISPLACED",

  /**
   * value: "MEDIA_PRESENT"
   * @const
   */
  MEDIA_PRESENT: "MEDIA_PRESENT",

  /**
   * value: "MEDIA_ABSENT"
   * @const
   */
  MEDIA_ABSENT: "MEDIA_ABSENT",

  /**
   * value: "MEDIA_HIGH"
   * @const
   */
  MEDIA_HIGH: "MEDIA_HIGH",

  /**
   * value: "MEDIA_FULL"
   * @const
   */
  MEDIA_FULL: "MEDIA_FULL",

  /**
   * value: "MEDIA_LOW"
   * @const
   */
  MEDIA_LOW: "MEDIA_LOW",

  /**
   * value: "MEDIA_EMPTY"
   * @const
   */
  MEDIA_EMPTY: "MEDIA_EMPTY",

  /**
   * value: "MEDIA_DAMAGED"
   * @const
   */
  MEDIA_DAMAGED: "MEDIA_DAMAGED",

  /**
   * value: "MEDIA_INCOMPLETELY_INSERTED"
   * @const
   */
  MEDIA_INCOMPLETELY_INSERTED: "MEDIA_INCOMPLETELY_INSERTED",

  /**
   * value: "BAGGAGE_FULL"
   * @const
   */
  BAGGAGE_FULL: "BAGGAGE_FULL",

  /**
   * value: "BAGGAGE_UNDETECTED"
   * @const
   */
  BAGGAGE_UNDETECTED: "BAGGAGE_UNDETECTED",

  /**
   * value: "BAGGAGE_PRESENT"
   * @const
   */
  BAGGAGE_PRESENT: "BAGGAGE_PRESENT",

  /**
   * value: "BAGGAGE_ABSENT"
   * @const
   */
  BAGGAGE_ABSENT: "BAGGAGE_ABSENT",

  /**
   * value: "BAGGAGE_OVERSIZED"
   * @const
   */
  BAGGAGE_OVERSIZED: "BAGGAGE_OVERSIZED",

  /**
   * value: "BAGGAGE_TOO_MANY_BAGS"
   * @const
   */
  BAGGAGE_TOO_MANY_BAGS: "BAGGAGE_TOO_MANY_BAGS",

  /**
   * value: "BAGGAGE_UNEXPECTED_BAG"
   * @const
   */
  BAGGAGE_UNEXPECTED_BAG: "BAGGAGE_UNEXPECTED_BAG",

  /**
   * value: "BAGGAGE_TOO_HIGH"
   * @const
   */
  BAGGAGE_TOO_HIGH: "BAGGAGE_TOO_HIGH",

  /**
   * value: "BAGGAGE_TOO_LONG"
   * @const
   */
  BAGGAGE_TOO_LONG: "BAGGAGE_TOO_LONG",

  /**
   * value: "BAGGAGE_TOO_FLAT"
   * @const
   */
  BAGGAGE_TOO_FLAT: "BAGGAGE_TOO_FLAT",

  /**
   * value: "BAGGAGE_TOO_SHORT"
   * @const
   */
  BAGGAGE_TOO_SHORT: "BAGGAGE_TOO_SHORT",

  /**
   * value: "BAGGAGE_TOO_WIDE"
   * @const
   */
  BAGGAGE_TOO_WIDE: "BAGGAGE_TOO_WIDE",

  /**
   * value: "BAGGAGE_TOO_SMALL"
   * @const
   */
  BAGGAGE_TOO_SMALL: "BAGGAGE_TOO_SMALL",

  /**
   * value: "BAGGAGE_INVALID_DATA"
   * @const
   */
  BAGGAGE_INVALID_DATA: "BAGGAGE_INVALID_DATA",

  /**
   * value: "BAGGAGE_WEIGHT_OUT_OF_RANGE"
   * @const
   */
  BAGGAGE_WEIGHT_OUT_OF_RANGE: "BAGGAGE_WEIGHT_OUT_OF_RANGE",

  /**
   * value: "BAGGAGE_JAMMED"
   * @const
   */
  BAGGAGE_JAMMED: "BAGGAGE_JAMMED",

  /**
   * value: "BAGGAGE_WRONG_INSERTED"
   * @const
   */
  BAGGAGE_WRONG_INSERTED: "BAGGAGE_WRONG_INSERTED",

  /**
   * value: "BAGGAGE_EMERGENCY_STOP"
   * @const
   */
  BAGGAGE_EMERGENCY_STOP: "BAGGAGE_EMERGENCY_STOP",

  /**
   * value: "BAGGAGE_RESTLESS"
   * @const
   */
  BAGGAGE_RESTLESS: "BAGGAGE_RESTLESS",

  /**
   * value: "BAGGAGE_TRANSPORT_BUSY"
   * @const
   */
  BAGGAGE_TRANSPORT_BUSY: "BAGGAGE_TRANSPORT_BUSY",

  /**
   * value: "BAGGAGE_MISTRACKED"
   * @const
   */
  BAGGAGE_MISTRACKED: "BAGGAGE_MISTRACKED",

  /**
   * value: "BAGGAGE_FORWARD_FAILED"
   * @const
   */
  BAGGAGE_FORWARD_FAILED: "BAGGAGE_FORWARD_FAILED",

  /**
   * value: "BAGGAGE_BACKWARD_FAILED"
   * @const
   */
  BAGGAGE_BACKWARD_FAILED: "BAGGAGE_BACKWARD_FAILED",

  /**
   * value: "BAGGAGE_UNEXPECTED_CHANGE"
   * @const
   */
  BAGGAGE_UNEXPECTED_CHANGE: "BAGGAGE_UNEXPECTED_CHANGE",

  /**
   * value: "BAGGAGE_ACCEPTED"
   * @const
   */
  BAGGAGE_ACCEPTED: "BAGGAGE_ACCEPTED",

  /**
   * value: "BAGGAGE_DELIVERED"
   * @const
   */
  BAGGAGE_DELIVERED: "BAGGAGE_DELIVERED",

  /**
   * value: "BAGGAGE_INTERFERENCE_USER"
   * @const
   */
  BAGGAGE_INTERFERENCE_USER: "BAGGAGE_INTERFERENCE_USER",

  /**
   * value: "BAGGAGE_INTRUSION_SAFETY"
   * @const
   */
  BAGGAGE_INTRUSION_SAFETY: "BAGGAGE_INTRUSION_SAFETY",

  /**
   * value: "BAGGAGE_NOT_CONVEYABLE"
   * @const
   */
  BAGGAGE_NOT_CONVEYABLE: "BAGGAGE_NOT_CONVEYABLE",

  /**
   * value: "BAGGAGE_IRREGULAR_BAG"
   * @const
   */
  BAGGAGE_IRREGULAR_BAG: "BAGGAGE_IRREGULAR_BAG",

  /**
   * value: "BAGGAGE_BAG_WITH_STRAPS"
   * @const
   */
  BAGGAGE_BAG_WITH_STRAPS: "BAGGAGE_BAG_WITH_STRAPS",

  /**
   * value: "BAGGAGE_UPRIGHT_BAG"
   * @const
   */
  BAGGAGE_UPRIGHT_BAG: "BAGGAGE_UPRIGHT_BAG",

  /**
   * value: "BAGGAGE_HANDLE_EXTENDED"
   * @const
   */
  BAGGAGE_HANDLE_EXTENDED: "BAGGAGE_HANDLE_EXTENDED",

  /**
   * value: "BAGGAGE_MULTIPLE_BAGS"
   * @const
   */
  BAGGAGE_MULTIPLE_BAGS: "BAGGAGE_MULTIPLE_BAGS",

  /**
   * value: "BAGGAGE_SLOPED_BAG"
   * @const
   */
  BAGGAGE_SLOPED_BAG: "BAGGAGE_SLOPED_BAG",

  /**
   * value: "BAGGAGE_VOLUME_NOT_DETERMINABLE"
   * @const
   */
  BAGGAGE_VOLUME_NOT_DETERMINABLE: "BAGGAGE_VOLUME_NOT_DETERMINABLE",

  /**
   * value: "BAGGAGE_OVERFLOW_TUB"
   * @const
   */
  BAGGAGE_OVERFLOW_TUB: "BAGGAGE_OVERFLOW_TUB",

  /**
   * value: "BAGGAGE_MAINTENANCE_MODE"
   * @const
   */
  BAGGAGE_MAINTENANCE_MODE: "BAGGAGE_MAINTENANCE_MODE",

  /**
   * value: "BAGGAGE_FORCEBAG_MODE"
   * @const
   */
  BAGGAGE_FORCEBAG_MODE: "BAGGAGE_FORCEBAG_MODE",

  /**
   * value: "BAGGAGE_MANUAL_MODE"
   * @const
   */
  BAGGAGE_MANUAL_MODE: "BAGGAGE_MANUAL_MODE",

  /**
   * value: "BAGGAGE_OFFBHS_MODE"
   * @const
   */
  BAGGAGE_OFFBHS_MODE: "BAGGAGE_OFFBHS_MODE",

  /**
   * value: "BAGGAGE_SUSPENDED_MODE"
   * @const
   */
  BAGGAGE_SUSPENDED_MODE: "BAGGAGE_SUSPENDED_MODE",

  /**
   * value: "BAGGAGE_OPERATIONAL_STOP"
   * @const
   */
  BAGGAGE_OPERATIONAL_STOP: "BAGGAGE_OPERATIONAL_STOP",

  /**
   * value: "BAGGAGE_TUB_REQUIRED"
   * @const
   */
  BAGGAGE_TUB_REQUIRED: "BAGGAGE_TUB_REQUIRED",

  /**
   * value: "AL_APPLICATION_REQUEST"
   * @const
   */
  AL_APPLICATION_REQUEST: "AL_APPLICATION_REQUEST",

  /**
   * value: "CL_APPLICATION_REQUEST"
   * @const
   */
  CL_APPLICATION_REQUEST: "CL_APPLICATION_REQUEST",

  /**
   * value: "SYSTEM_REQUEST"
   * @const
   */
  SYSTEM_REQUEST: "SYSTEM_REQUEST",

  /**
   * value: "DEVICE_REQUEST"
   * @const
   */
  DEVICE_REQUEST: "DEVICE_REQUEST",

  /**
   * value: "TRANSFER_REQUEST"
   * @const
   */
  TRANSFER_REQUEST: "TRANSFER_REQUEST",

  /**
   * Returns a <code>MessageCodes</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/MessageCodes} The enum <code>MessageCodes</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {MessageCodes};