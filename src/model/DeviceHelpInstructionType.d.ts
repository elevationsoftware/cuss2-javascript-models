
declare module "model/DeviceHelpInstructionType" {
    /**
     * The DeviceHelpInstructionType model module.
     * @module model/DeviceHelpInstructionType
     * @version 1.0.0
     */
    export class DeviceHelpInstructionType {
        /**
         * Constructs a <code>DeviceHelpInstructionType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/DeviceHelpInstructionType} obj Optional instance to populate.
         * @return {module:model/DeviceHelpInstructionType} The populated <code>DeviceHelpInstructionType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * The list of supported languages as RFC3066 2-letter codes or 2-2-letter codes
         * @member {Array.<String>} supportedLanguages
         */
        supportedLanguages: any;
        /**
         * XML formatted device help text structure to be passed to applications audio output. The texts for the audio output need to be in SSML 1.0/SSML 1.1 format.<p>   <b>Example:</b>   ```XML   <?xml version=\"1.0\" encoding=\"UTF-8\"?>   <deviceHelp lang-supported=\"en-US,ja-JP\">     <deviceDescription time=\"7\">       <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"en-US\">The magnetic card reader device is used to read the data from your credit card or frequent flier card</speak>           <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"ja-JP\">磁気カードリーダ装置は、クレジットカードやマイレージカードからデータを読 み取るために使用される </speak>     </deviceDescription>     <deviceLocation time=\"5\">       <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"en-US\">The card reader is located to the lower right of the main screen </speak>       <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"ja-JP\">カードリーダは、メイン画面の右下に配置されている </speak>     </deviceLocation>     <deviceProfile time=\"13\">       <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"en-US\">The reader is mounted horizontally and protrudes about one half inch from the face of the kiosk. It is 2 inches tall and 5 inches wide with a card slot located in the center</speak>            <speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xml:lang=\"ja-JP\"> 読者は、水平に搭載され、キオスクの表面から約0.5インチに突出している。こ れは、中心部に位置するカードスロットを持つ広い背の高い2インチと5インチ である </speak>     </deviceProfile>   </deviceHelp>
         * @member {String} deviceHelpInstructions
         */
        deviceHelpInstructions: any;
    }
}
