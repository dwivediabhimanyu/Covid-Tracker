import { Component, OnInit } from '@angular/core';
import { GetLocationService } from '../services/get-location.service' 
import { GeoService } from '../services/geo.service'
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  coordinates
  dishes: Dish[];
  allLocation = {
    "kgmu":[26.869422,80.916219],
    "rml": [26.868978,81.000823],
    "emc": [26.878589,81.000823],
    "hims": [26.907676,81.127253]
  }
  markers: any;
  constructor(
    private getLoc: GetLocationService,
    private dishService: DishService,
    private geo: GeoService
  ) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
    this.getLoc.getPosition().subscribe((pos: Position)=>{
      this.coordinates = {
        latitude : +(pos.coords.latitude),
        longitude: +(pos.coords.longitude)
      }
      console.log("Coords",this.coordinates)
      this.geo.getLocation(50,[this.coordinates.latitude,this.coordinates.longitude])
    
    })
//this.geo.setLocation(this.allLocation)
    this.geo.hits.subscribe(hits => this.markers = hits)
  }

}
