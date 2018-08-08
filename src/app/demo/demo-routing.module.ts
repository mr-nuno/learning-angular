import { FlexComponent } from '@app/demo/pages/flex/flex.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'flex', component: FlexComponent },
  { path: '**', redirectTo: 'flex' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
