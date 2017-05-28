import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

const componentList = [
  HeaderComponent, NavComponent
];
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...componentList
  ],
  declarations: [
    ...componentList
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
