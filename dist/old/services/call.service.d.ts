import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export interface Ip {
    protocol?: string;
    host: string;
    port?: string;
}
export declare class CallService {
    private _http;
    json: any;
    _ip: Ip;
    constructor(_http: Http);
    getUrl(url: string): string;
    conf(ip: Ip): void;
    readonly ip: string;
    getOptions(headersList: any, par?: any): RequestOptions;
    get(url: string, params?: any, head?: any): Promise<Response>;
    delete(url: string, head?: any): Promise<Response>;
    head(url: string, head?: any): Promise<Response>;
    post(url: string, body?: any, head?: any): Promise<Response>;
    put(url: string, body?: any, head?: any): Promise<Response>;
    patch(url: string, body?: any, head?: any): Promise<Response>;
}
