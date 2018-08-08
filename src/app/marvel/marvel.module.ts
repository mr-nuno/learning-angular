import { MaterialModule } from '@app/shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { HeroThumbnailComponent } from './pages/hero-list/components/hero-thumbnail/hero-thumbnail.component';
import { MarvelRoutingModule } from './marvel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MarvelRoutingModule,
    MaterialModule
  ],
  declarations: [HeroListComponent, HeroDetailsComponent, HeroThumbnailComponent]
})
export class MarvelModule { }
