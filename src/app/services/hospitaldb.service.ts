import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Hospital } from '../shared/hospitalRecordModel'
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HospitaldbService {
  hospitalCollection: AngularFirestoreCollection<Hospital>
  hospitals: Observable<any>


  constructor( public afs: AngularFirestore) {
    this.hospitals = this.afs.collection('hospitals').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Hospital
        data.id = a.payload.doc.id
        return data
      })
    }))
   }

   getHospitals() {
     return this.hospitals
   }
}


