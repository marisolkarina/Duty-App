import { Injectable } from '@angular/core';
import { Duty } from '../models/duty'
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DutyService {


  // duties: Duty[]

  constructor(
    public angulardb: AngularFireDatabase,
    private auth: AngularFireAuth
  ) {

  }


//1ER INTENTO

  // getDuties() {
  //   if (localStorage.getItem('duties') === null) {
  //     return this.duties;
  //   } else {
  //     this.duties = JSON.parse(localStorage.getItem('duties')!);
  //     return this.duties;
  //   }

  // }

  // addDuty(duty: Duty) {
  //   this.duties.push(duty)
  //   let duties: Duty[] = [];
  //   if (localStorage.getItem('duties') === null) {
  //     duties.push(duty);
  //     localStorage.setItem('duties', JSON.stringify(duties))
  //   } else {
  //     duties = JSON.parse(localStorage.getItem('duties')!)
  //     duties.push(duty);
  //     localStorage.setItem('duties', JSON.stringify(duties))
  //   }
  // }

  // deleteDuty(duty: Duty) {
  //   for (let i=0;i<this.duties.length;i++) {
  //     if (duty == this.duties[i]) {
  //       this.duties.splice(i,1)
  //       localStorage.setItem('duties', JSON.stringify(this.duties))
  //     }
  //   }
  // }

  ///2DO INTENTO
  getDuties() {
    return this.angulardb.list('/Duties/').valueChanges()
  }

  addDuty(duty: any) {
    const dbRef = this.angulardb.list('/Duties')
    dbRef.push(duty).then(res => {
      duty.id = res.key
      this.angulardb.object('/Duties/'+`${duty.id}`).update(duty)
    })
  }

  deleteDuty(duty:any) {
    this.angulardb.list('/Duties/'+`${duty.id}`).remove()

  }




}

