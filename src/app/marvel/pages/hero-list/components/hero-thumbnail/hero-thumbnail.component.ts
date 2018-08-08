import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '@app/marvel/models/hero';

@Component({
  selector: 'app-hero-thumbnail',
  templateUrl: './hero-thumbnail.component.html',
  styleUrls: ['./hero-thumbnail.component.scss']
})
export class HeroThumbnailComponent implements OnInit {

  url = '';

  @Input()
  hero: Hero;

  ngOnInit() {
    this.url = `${this.hero.thumbnail.path}.${this.hero.thumbnail.extension}`;
  }

}
