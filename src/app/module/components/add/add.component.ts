import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Duty } from '../../../models/duty';
import { DutyService } from '../../../services/duty.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formDuty: any;
 
  // formDuty = new FormGroup (
  //   {
  //     description: new FormControl(''),
  //     commitmentDate: new FormControl('')
  //   }
  // )
  

  constructor(
    private fb: FormBuilder,
    public dutyService: DutyService
  ) {

  }

  ngOnInit(): void {
    this.formDuty = this.fb.group({		
			description: ['',Validators.required],
      commitmentDate: ['']
		});
  }

  // addDuty(newDescription: HTMLInputElement, newCommitmentDate: HTMLInputElement) {
  
  //   if(this.formDuty.valid){
  //     this.dutyService.addDuty({  
  //       description: newDescription.value,
  //       commitmentDate: newCommitmentDate.value
  //     })
      
  //     this.formDuty.reset()
  //     return false;
  //   } else {
  //     return;
  //   }
 
  // }

  addDuty() {
    // console.log(this.formDuty.value)
    if (this.formDuty.valid){
      this.dutyService.addDuty(this.formDuty.value)
      this.formDuty.reset()
      return false;
    } else {
      console.log('invalid')
      
      return;
    }
  }
}
