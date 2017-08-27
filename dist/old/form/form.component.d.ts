import { OnInit, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
export interface SelectInput {
    title: string;
    value: any;
}
export interface RenderInput {
    column: string;
    title: string;
    type: string;
    name: string;
    isSelect?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    step?: string;
    options?: SelectInput[];
    class?: string;
    error?: string;
    noitem?: boolean;
}
export declare class FormComponent implements OnInit, AfterViewInit {
    private _ar;
    title: string;
    icon: string;
    columns: string[];
    renderinputs: RenderInput[];
    form: FormGroup;
    service: any;
    deleteable: boolean;
    saveable: boolean;
    otro: boolean;
    debug: boolean;
    retur: boolean;
    _ready: boolean;
    item: any;
    private errorMessages;
    constructor(_ar: ActivatedRoute);
    setReady(val: boolean): void;
    setItem(item: any): void;
    prePatchValue(value: any): any;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onValueChanged(data: any): void;
    isValid(): boolean;
    isRender(col1: any, col2: any, item: any): boolean;
    save(back?: boolean): void;
    _findErros(errs: any): void;
    delete(): void;
    preSave(body: any): any;
    successful(data: any): void;
    back(): void;
    error(error: any): void;
    _error(error: any, defaultMgs: string): void;
}
