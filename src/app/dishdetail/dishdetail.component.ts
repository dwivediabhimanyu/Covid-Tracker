import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { HospitaldbService } from '../services/hospitaldb.service'

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

  dish: any;
  hospitals: any
  dishIds: string[];
  current: string;
  prev: string;
  next: string;
  private sub: any;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    public hospitalService: HospitaldbService) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.current = params['id'];
   });
   this.hospitalService.getHospitals().subscribe(
    items => {
      console.log("Firebase Data")
      this.hospitals = items;
      console.log(this.hospitals)
    }
  )
   console.log(this.current)
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  goBack(): void {
    this.location.back();
  }

}