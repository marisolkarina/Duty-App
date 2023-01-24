import { Injectable } from '@angular/core';
import { Duty } from '../models/duty'

@Injectable({
  providedIn: 'root'
})
export class DutyService {

  duties: Duty[]

  constructor() {
    this.duties = [
    //   {description: 'Reunion', commitmentDate: '20-01-2023'}    
    ]
  }

  getDuties() {
    if (localStorage.getItem('duties') === null) {
      return this.duties;
    } else {
      this.duties = JSON.parse(localStorage.getItem('duties')!);
      return this.duties;
    }
    
  }

  addDuty(duty: Duty) {
    this.duties.push(duty)
    let duties: Duty[] = [];
    if (localStorage.getItem('duties') === null) {
      duties.push(duty);
      localStorage.setItem('duties', JSON.stringify(duties))
    } else {
      duties = JSON.parse(localStorage.getItem('duties')!)
      duties.push(duty);
      localStorage.setItem('duties', JSON.stringify(duties))
    }
  }

  deleteDuty(duty: Duty) {
    for (let i=0;i<this.duties.length;i++) {
      if (duty == this.duties[i]) {
        this.duties.splice(i,1)
        localStorage.setItem('duties', JSON.stringify(this.duties))
      }
    }
  }
}

