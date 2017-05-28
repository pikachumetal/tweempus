import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';

const modulesList = [
  CommonModule
];

const componentsList = [
  TwimpCardComponent,
  TwimpListComponent
];

@NgModule({
  imports: [
    ...modulesList
  ],
  declarations: [
    ...componentsList
  ],
  exports: [
    ...componentsList
  ]
})
export class SharedModule { }
