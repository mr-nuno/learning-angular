import { MaterialModule } from '@app/shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FlexComponent } from './pages/flex/flex.component';
import { FlexLayoutModule } from '../../../node_modules/@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [FlexComponent]
})
export class DemoModule { }
