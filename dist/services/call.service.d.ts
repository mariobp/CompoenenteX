import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export interface Ip {
    protocol?: string;
    port?: string;
    host: string;
}
export interface ExError {
    error: any;
    title?: string;
    text?: string;
}
export declare class CallService {
    private _http;
    json: any;
    _ip: Ip;
    constructor(_http: Http);
    conf(ip: Ip): void;
    readonly ip: string;
    private getUrl(url);
    private getOptions(headersList, par?);
    get(url: string, params?: any, head?: any): Promise<Response>;
    delete(url: string, head?: any): Promise<Response>;
    head(url: string, head?: any): Promise<Response>;
    post(url: string, body?: any, head?: any): Promise<Response>;
    put(url: string, body?: any, head?: any): Promise<Response>;
    patch(url: string, body?: any, head?: any): Promise<Response>;
    private error(error);
}
