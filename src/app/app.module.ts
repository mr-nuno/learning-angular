import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from '@app/shared/material.module';
import { HomeComponent } from '@app/shared//components/home/home.component';
import { ToolbarComponent } from '@app/shared/components/toolbar/toolbar.component';
import { SidebarComponent } from '@app/shared/components/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'marvel', loadChildren: './marvel/marvel.module#MarvelModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
