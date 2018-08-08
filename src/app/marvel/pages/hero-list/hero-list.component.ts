import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/marvel/models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  loading = true;
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getAll().subscribe(data => {
      console.log(data);
      this.heroes = data;
      this.loading = false;
    });
  }
}
