import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Duty } from '../../../models/duty';
import { DutyService } from '../../../services/duty.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formDuty: any;

  // submitted = false;

  // dutyArray: Duty[] = [
    
  // ];

  // selectedDuty: Duty = new Duty();


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

  addDuty(newDescription: HTMLInputElement, newCommitmentDate: HTMLInputElement) {
  
    if(this.formDuty.valid){
      this.dutyService.addDuty({  
        description: newDescription.value,
        commitmentDate: newCommitmentDate.value
      })
      
      this.formDuty.reset()
      return false;
    } else {
      return;
    }
    
      
 
    


    // if(this.createDuty.valid){
    //   this.submitted = true;
    //   this.selectedDuty.id = this.dutyArray.length + 1;
    //   this.dutyArray.push(this.selectedDuty);
    //   this.selectedDuty = new Duty();
    //   console.log("valid")
    // } else {
    //   return;
    // }
    
  }


  // deleteDuty(i:number):void {
  //   this.dutyArray.splice(i, 1);
  // }




}
