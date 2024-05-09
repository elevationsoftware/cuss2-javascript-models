
declare module "model/MediaTypes" {
    /**
     * *
     */
    export type MediaTypes = string;
    export namespace MediaTypes {
        let MAGCARD: string;
        let JISCARD: string;
        let CARD: string;
        let CHIP: string;
        let BARCODE: string;
        let TICKET: string;
        let RECEIPT: string;
        let BOARDINGPASS: string;
        let BAGGAGETAG: string;
        let HEAVYTAG: string;
        let RFID_BAGGAGETAG: string;
        let BAGGAGE: string;
        let PASSPORT: string;
        let IDCARD: string;
        let VISA: string;
        let DRIVERLICENSE: string;
        let RFID: string;
        let NFC: string;
        let OCR: string;
        let IMAGE: string;
        let PRINTED: string;
        let AUDIO: string;
        let VISUAL: string;
        let TOUCH: string;
        let DATASTRUCTURE: string;
        function constructFromObject(object: any): any;
    }
}
