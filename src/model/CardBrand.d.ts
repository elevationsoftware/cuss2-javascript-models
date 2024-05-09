
declare module "model/CardBrand" {
    /**
     * *
     */
    export type CardBrand = string;
    export namespace CardBrand {
        let AMEX: string;
        let CART_BLANCHE: string;
        let DISCOVER: string;
        let JCB: string;
        let MAESTRO: string;
        let MASTERCARD: string;
        let SWITCH: string;
        let VISA: string;
        function constructFromObject(object: any): any;
    }
}
