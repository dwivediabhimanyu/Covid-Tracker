import { Component, OnInit , AfterViewInit} from '@angular/core';
import { HospitaldbService } from '../services/hospitaldb.service'
import { Hospital } from '../shared/hospitalRecordModel'
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { AnimateTimings } from '@angular/animations';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  newItem = {
    id : '0',
    name: '',
    category: '',
    price: '',
    totalBeds: 0,
    occupiedBeds: 0,
    vaccant: 0,
    lat: null,
    lng: null,
    image: 'https://tj-static.s3.ap-south-1.amazonaws.com/hospital.jpg'
  }
  viewHospital: boolean = true;
  addHospital: boolean = false;
  items: Hospital[];
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  google: any
  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    public hospitalService: HospitaldbService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(
      items => {
        console.log("Firebase Data")
        this.items = items;
        console.log(this.items)
      }
    );

  }   


  ngAfterViewInit(){
     
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new this.google.maps.Geocoder;
      
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  addHospitalButton(){
    this.addHospital = true
    this.viewHospital = false
  }
  viewHospitalButton(){
    this.addHospital = false
    this.viewHospital = true
  }
  onSubmit() {
    this.newItem.vaccant = this.newItem.totalBeds - this.newItem.occupiedBeds
    this.newItem.lat = this.latitude
    this.newItem.lng = this.longitude
    this.hospitalService.addHospital(this.newItem)

    this.newItem.name = ''
    this.newItem.price = ''
    this.newItem.category = ''
    this.viewHospital = true
    this.addHospital = false
    this.openSnackBar("Hospital Record Published", "Close")
  }
  deleteHospital(item){
    this.hospitalService.deleteHospital(item)
    this.openSnackBar("Hospital Record Deleted", "Close")
  }
  updateHospital(item) {
    item.vaccant = item.totalBeds - item.occupiedBeds
    this.hospitalService.updateHospital(item) 
    this.openSnackBar("Patient Details Updated", "Close")
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }



}
