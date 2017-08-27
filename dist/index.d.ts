import { ModuleWithProviders } from '@angular/core';
export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';
export * from './services/call.service';
export { CrudBase, CrudService, CrudConf } from './old/services';
export * from './old/components';
export * from './old/bs.notify';
export declare class SampleModule {
    static forRoot(): ModuleWithProviders;
}
