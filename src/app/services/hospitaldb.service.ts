import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Hospital } from '../shared/hospitalRecordModel'
import { Observable ,of} from 'rxjs';
import { map, filter } from 'rxjs/operators'

import { GeoService } from './geo.service'

@Injectable({
  providedIn: 'root'
})
export class HospitaldbService {
  hospitalCollection: AngularFirestoreCollection<Hospital>
  hospitals: Observable<any>
  itemDoc: AngularFirestoreDocument<any>

  constructor(
    public afs: AngularFirestore,
    public geo: GeoService) {
    this.hospitalCollection = this.afs.collection('hospitals', ref => ref.orderBy('name','asc'));
    this.hospitals = this.hospitalCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Hospital
        data.id = a.payload.doc.id
        return data
      })
    }))
   }
   // return all hospital 
   getHospitals() {
    console.log(this.hospitals) 
    return this.hospitals
   }


  addHospital(item) {
    this.hospitalCollection.add(item).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      console.log(item)
      this.geo.setLocation(docRef.id, [item.lat, item.lng])
    }).catch(function (error) {
      console.error("Error adding Hospital", error);
    });
  }

  deleteHospital(item) {
    this.itemDoc = this.afs.doc(`hospitals/${item.id}`)
    this.itemDoc.delete()
    console.log("Deleted:",item.id)
  }

  updateHospital(item) {
    this.itemDoc = this.afs.doc(`hospitals/${item.id}`)
    this.itemDoc.update(item)
    console.log("Updated:",item.id)
  }

}


