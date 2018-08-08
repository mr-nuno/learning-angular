import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, mapTo } from 'rxjs/operators';
import { Hero } from '@app/marvel/models/hero';

const baseUrl = 'https://gateway.marvel.com/v1/public';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Hero[]> {
    const apiKey = 'faa4fed421fbcc196a7b5e73cd6bb51d';
    const ts = '636627106857855984&hash=9186c9341ccf3f4e447fbfd4e16e2c97';
    return this.http
      .get<Response>(`${baseUrl}/characters?apikey=${apiKey}&ts=${ts}`)
      .pipe(tap(resp => {
        console.log(resp);
      }))
      .pipe(map(resp => {
        const r = resp as any;
        return r.data.results.map(item => item as Hero) as Hero[];
      }));
  }
}
