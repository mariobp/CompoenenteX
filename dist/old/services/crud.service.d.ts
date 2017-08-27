import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CallService } from './call.service';
export interface CrudConf {
    redirect?: string;
    list?: string;
    add?: string;
    edit?: string;
    delete?: string;
}
export declare class CrudBase implements Resolve<any> {
    protected _cl: CallService;
    protected router: Router;
    data: any[];
    protected conf: CrudConf;
    constructor(_cl: CallService, router: Router);
    protected init(conf: CrudConf): void;
    setAddUrl(val: string): void;
    setEditUrl(val: string): void;
    setRedirectUrl(val: string): void;
    setDeleteUrl(val: string): void;
    setListUrl(val: string): void;
    readonly addUrl: string;
    readonly editUrl: string;
    readonly redirectUrl: string;
    readonly deleteUrl: string;
    readonly listUrl: string;
    getById(id: any): Promise<any>;
    list(query: any): Promise<any>;
    add(body: any): Promise<any>;
    edit(id: number, body: any): Promise<any>;
    delete(id: number): Promise<any>;
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any;
    down(aurl: string, id: string, formt: number): void;
}
export declare class CrudService extends CrudBase {
    protected _cl: CallService;
    protected _rt: Router;
    base_url: string;
    constructor(_cl: CallService, _rt: Router, base_url: string);
    setBaseUrl(val: any): void;
}
