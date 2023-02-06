import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Duty } from '../../../models/duty';
import { DutyService } from '../../../services/duty.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {


  // duties: Duty[]
  
  duties: any;

  // public dutyItems: Duty[] = [];

  constructor(
    public dutyService: DutyService,
    public afAuth: AngularFireAuth
  ) { }

  

  ngOnInit():void {
    // this.duties = this.dutyService.getDuties();
    this.getDuties();
  }


  getDuties() {
    this.dutyService.getDuties()
      .subscribe(
        res => {
          this.duties = res
        }
      );
  }



  // deleteDuty(duty: Duty) {
    // this.dutyService.deleteDuty(duty)
  // }

  deleteDuty(duty:any) {
    this.dutyService.deleteDuty(duty);
  }

}
