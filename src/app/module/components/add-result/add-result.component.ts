import { Component, OnInit } from '@angular/core';
import { Duty } from '../../../models/duty';
import { DutyService } from '../../../services/duty.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {

  duties!: Duty[]

  constructor(
    public dutyService: DutyService
  ) { }

  ngOnInit() {
    this.duties = this.dutyService.getDuties();
  }

  deleteDuty(duty: Duty) {
    this.dutyService.deleteDuty(duty)
  }


}
