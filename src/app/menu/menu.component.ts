import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
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
  selected: string;
  items: Hospital[];
  constructor(
    public hospitalService: HospitaldbService) { }

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(
      items => {
        console.log("Firebase Data")
        this.items = items;
        console.log(this.items)
      }
    )
    this.selected = 'option0'
  }
  
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }


  
}
