import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import {
    SampleComponent,
    BaseComponent,
    P404Component,
    CardComponent,
    ToolbarComponent,
    SidebarComponent,
    TableComponent,
    FormComponent,
    RouteComponent,
    MigaComponent,
    AutoComponent,
    MultiComponent,
    ExgmapComponent
} from './components';

import { SampleDirective } from './directives';
import { SamplePipe } from './pipes';
import { CallService, SampleService, AuthGuard, AuthService, WebsocketService, Ip } from './services';

interface CustomConfig {
    gmapkey?: string;
    ip?: Ip;
    login?: string;
    isLogin?: string;
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        AgmCoreModule
    ],
    declarations: [
        SampleDirective,
        SamplePipe,
        SampleComponent,
        BaseComponent,
        P404Component,
        CardComponent,
        ToolbarComponent,
        SidebarComponent,
        TableComponent,
        FormComponent,
        RouteComponent,
        MigaComponent,
        AutoComponent,
        MultiComponent,
        ExgmapComponent
    ],
    exports: [
        SampleComponent,
        BaseComponent,
        P404Component,
        CardComponent,
        ToolbarComponent,
        SidebarComponent,
        TableComponent,
        FormComponent,
        RouteComponent,
        MigaComponent,
        AutoComponent,
        MultiComponent,
        ExgmapComponent,
        SampleDirective,
        SamplePipe,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SampleModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SampleModule,
            providers: [
                SampleService,
                CallService,
                AuthGuard,
                AuthService,
                WebsocketService,
            ]
        }
    }
}

export * from './services'
export * from './directives';
export * from './pipes';
export * from './components';
export * from './utils'
