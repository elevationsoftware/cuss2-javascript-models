
declare module "model/PlatformDirectives" {
    /**
     * *
     */
    export type PlatformDirectives = string;
    export namespace PlatformDirectives {
        let platformEnvironment: string;
        let platformComponents: string;
        let platformApplicationsStaterequest: string;
        let platformApplicationsTransferrequest: string;
        let platformApplicationsAcknowledgeAccessible: string;
        let peripheralsAnnouncementPlay: string;
        let peripheralsAnnouncementPause: string;
        let peripheralsAnnouncementResume: string;
        let peripheralsAnnouncementStop: string;
        let peripheralsCancel: string;
        let peripheralsQuery: string;
        let peripheralsSend: string;
        let peripheralsSetup: string;
        let peripheralsUserpresentEnable: string;
        let peripheralsUserpresentDisable: string;
        let peripheralsUserpresentOffer: string;
        let peripheralsConveyorsForward: string;
        let peripheralsConveyorsBackward: string;
        let peripheralsConveyorsProcess: string;
        function constructFromObject(object: any): any;
    }
}
