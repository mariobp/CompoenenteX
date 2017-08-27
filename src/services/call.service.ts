import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



declare var ReconnectingWebSocket: any;
declare var window: any;

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

@Injectable()
export class CallService {

    public json: any = { 'Content-Type': 'application/json' };
    public _ip: Ip;


    constructor(private _http: Http) {
        window._server = this.ip;
    }

    public conf(ip: Ip) {
        this._ip = ip;
        window._server = this.ip;
    }

    public get ip(): string {
        if (!!this._ip) {
            return this.construcIP(this._ip.protocol, this._ip.host, this._ip.port);
        }
        return '';
    }

    

    private construcIP(proto = 'http', host = '0.0.0.0', port = '' ): string {
       return `${proto}://${this._ip.host}:${port}`
    }


    public getUrl(url: string, proto?: string): string {
        let ip;
        let auxUrl = `/${url}`;
        if(!!this._ip && !!proto){
            ip = this.construcIP(proto, this._ip.host, this._ip.port);
        }else{
            ip = this.ip; 
        }
        if (ip) {
            auxUrl = `${ip}${auxUrl}`;
        }
        return auxUrl;
    }

    

    private getOptions(headersList: any, par?: any): RequestOptions {
        const options = new RequestOptions();
        const headers = new Headers();
        headersList = headersList || this.json;
        for (const key in headersList) {
            if (headersList[key]) {
                headers.append(key, headersList[key]);
            }
        }
        if (!!par) {
            const query = new URLSearchParams();
            for (const key in par) {
                if (par[key]) {
                    query.set(key, par[key]);
                }
            }
            options.search = query;
        }
        options.headers = headers;
        options.withCredentials = true;
        return options;
    }

    get(url: string, params?: any, head?: any): Observable<any> {
        return this._http.get(this.getUrl(url), this.getOptions(head, params)).catch(this.error);
    }

    delete(url: string, head?: any): Observable<any> {
        return this._http.delete(this.getUrl(url), this.getOptions(head)).catch(this.error);
    }

    head(url: string, head?: any): Observable<any> {
        return this._http.delete(this.getUrl(url), this.getOptions(head)).catch(this.error);
    }

    post(url: string, body?: any, head?: any): Observable<any> {
        return this._http.post(this.getUrl(url), body, this.getOptions(head)).catch(this.error);
    }


    put(url: string, body?: any, head?: any): Observable<any> {
        return this._http.put(this.getUrl(url), body, this.getOptions(head)).catch(this.error);
    }

    patch(url: string, body?: any, head?: any): Observable<any> {
        return this._http.patch(this.getUrl(url), body, this.getOptions(head)).catch(this.error);
    }

    private error(error): Observable<ExError> {
        let res: ExError;
        switch (error.status) {
            case 0:
                res = {
                    title: 'Sin Conexión!',
                    text: 'Verifique su Conexión a Internet.',
                    error: error
                };
                break;
            case 400:
                res = {
                    title: '400',
                    text: '400',
                    error: error
                };
                break;
            case 403:
                res = {
                    title: 'Sin Acceso!',
                    text: 'Usted no tiene permitido realizar este cambio.',
                    error: error
                };
                break;
            case 404:
                res = {
                    title: 'No se pudo encontrar el objeto!',
                    error: error
                };
                break;
            case 408:
                res = {
                    title: 'Su solicitud ha tardado mucho tiempo!',
                    text: 'Por favor verifique su Conexión a Internet y vuelva a intentarlo.',
                    error: error
                };
                break;
            default:
                res = { error: error };
                break;
        }
        return Observable.throw(res);
    }

}


declare var channels: any;

@Injectable()
export class WebsocketService {
    
    private subjects = [];
    public _mgs: Subject<any>; 
    private ws: any; 
    
    constructor() {
        if(!this._mgs){
            this._mgs = new Subject();
        }
        if(!this.ws){
            this.ws = new channels.WebSocketBridge();
        }
    }

    public mgs(type?: string){
        if(!type){
            return this._mgs;
        }else{
            const aux =  this.subjects.filter(item => item.type === type)[0];
            const subject = !aux? this.demultiplex(type): aux.subject;  
            this.subjects.push({type, subject });
            return subject;        
        }
    }

    public connect(url: string){
        this.ws.connect(url);
        this.ws.listen(data => this._mgs.next(data));
        this.ws.socket.addEventListener('open', function () {
            console.log("Connected to WebSocket");
        });
        this.ws.socket.addEventListener('close', function () {
            console.log("Disconnected to WebSocket");
        });
    }
    
    private demultiplex(type: string): Subject<any>{
        const subject = new Subject();
        this.ws.demultiplex(type, action =>  subject.next(action));
        return subject;
    }
    
    public send(data){
        this.ws.send(data)
    }

}