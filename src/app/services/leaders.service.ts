import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders'
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADER).pipe(delay(2000));
  }
  getFeaturedLeaders(): Observable<Leader> {
    return of(LEADER.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  }
}
