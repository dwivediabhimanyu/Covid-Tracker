import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { HospitaldbService } from '../services/hospitaldb.service'
import { Hospital } from '../shared/hospitalRecordModel'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  items: Hospital[];
  constructor(
    private dishService: DishService,
    public hospitalService: HospitaldbService) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
    this.hospitalService.getHospitals().subscribe(
      items => {
        console.log("Firebase Data")
        this.items = items;
        console.log(this.items)
      }
    )
  }
  
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }


  
}
