import { Component, OnInit } from '@angular/core';
import { HospitaldbService } from '../services/hospitaldb.service'
import { Hospital } from '../shared/hospitalRecordModel'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  items: Hospital[];

  constructor(public hospitalService: HospitaldbService) { }

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(
      items => {
        console.log("Firebase Data")
        this.items = items;
        console.log(this.items)
      }
    )
  }   

}
