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

/**
 * The DeviceHelpInstructionType model module.
 * @module model/DeviceHelpInstructionType
 * @version 1.0.0
 */
export class DeviceHelpInstructionType {
  /**
   * Constructs a new <code>DeviceHelpInstructionType</code>.
   * XML formatted device help text structure to be inserted into applications audio output.
   * @alias module:model/DeviceHelpInstructionType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DeviceHelpInstructionType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceHelpInstructionType} obj Optional instance to populate.
   * @return {module:model/DeviceHelpInstructionType} The populated <code>DeviceHelpInstructionType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceHelpInstructionType();
      if (data.hasOwnProperty('supportedLanguages'))
        obj.supportedLanguages = ApiClient.convertToType(data['supportedLanguages'], ['String']);
      if (data.hasOwnProperty('deviceHelpInstructions'))
        obj.deviceHelpInstructions = ApiClient.convertToType(data['deviceHelpInstructions'], 'String');
    }
    return obj;
  }
}

/**
 * The list of supported languages as RFC3066 2-letter codes or 2-2-letter codes
 * @member {Array.<String>} supportedLanguages
 */
DeviceHelpInstructionType.prototype.supportedLanguages = undefined;

/**
 * XML formatted device help text structure to be passed to applications audio output. The texts for the audio output need to be in SSML 1.0/SSML 1.1 format.<p>   <b>Example:</b>   ```XML   <?xml version=\"1.0\" encoding=\"UTF-8\"?>   <deviceHelp lang-supported=\"en-US,ja-JP\">     <deviceDescription time=\"7\">       <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"en-US\">The magnetic card reader device is used to read the data from your credit card or frequent flier card</speak>           <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"ja-JP\">磁気カードリーダ装置は、クレジットカードやマイレージカードからデータを読 み取るために使用される </speak>     </deviceDescription>     <deviceLocation time=\"5\">       <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"en-US\">The card reader is located to the lower right of the main screen </speak>       <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"ja-JP\">カードリーダは、メイン画面の右下に配置されている </speak>     </deviceLocation>     <deviceProfile time=\"13\">       <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"en-US\">The reader is mounted horizontally and protrudes about one half inch from the face of the kiosk. It is 2 inches tall and 5 inches wide with a card slot located in the center</speak>            <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"ja-JP\"> 読者は、水平に搭載され、キオスクの表面から約0.5インチに突出している。こ れは、中心部に位置するカードスロットを持つ広い背の高い2インチと5インチ である </speak>     </deviceProfile>   </deviceHelp> 
 * @member {String} deviceHelpInstructions
 */
DeviceHelpInstructionType.prototype.deviceHelpInstructions = undefined;

