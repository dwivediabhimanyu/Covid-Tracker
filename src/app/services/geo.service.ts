import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { BehaviorSubject } from 'rxjs'
import { GeoFire } from 'geofire'
import * as firebase from 'firebase/app'
@Injectable({
  providedIn: 'root'
})
export class GeoService {

  dbRef : any
  geoFire: any
  hits = new BehaviorSubject([])

  constructor(
    private db: AngularFireDatabase,
    private fb: AngularFireModule
  ) { 
    const firebaseRef = firebase.database().ref();
    this.geoFire = new GeoFire(firebaseRef);
   }

   setLocation(locData : Object) {
    this.geoFire.set(locData)
    .then(_ => console.log('location uploaded'))
    .catch(err => console.log(err))
   }
   getLocation(radius: number, coords: Array<number>) {
     console.log("GET LOC INVOKED")
     this.geoFire.query({
       center: coords,
       radius: radius
     })
     .on('key_entered' , (key, location, distance) => {
       let hit = {
         location: location,
         distance: distance
       }
       console.log(hit,"Recieved Hit")
       let currentHits = this.hits.value
       currentHits.push(hit)
       this.hits.next(currentHits)
       console.log(hit)
     })
     
   }
}
