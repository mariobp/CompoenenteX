export declare class BsNotify {
    static color: {
        INFO: string;
        SUCCESS: string;
        WARNING: string;
        DANGER: string;
        ROSE: string;
        PRIMARY: string;
    };
    static notify(message: string, icon: string, type?: string): void;
    static error(message: any): void;
    static ok(message: any): void;
    static warn(message: any): void;
    static info(message: any): void;
}
