import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Duty } from '../../../models/duty';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  createDuty: FormGroup;
  submitted = false;

  dutyArray: Duty[] = [
    
  ];

  selectedDuty: Duty = new Duty();

  constructor(public fb: FormBuilder) {
    this.createDuty = this.fb.group({
      description: ['', Validators.required],
      commitmentDate: ['']
    })
  }

  ngOnInit(): void {

  }

  addDuty():void {
    if(this.createDuty.valid){
      this.submitted = true;
      this.selectedDuty.id = this.dutyArray.length + 1;
      this.dutyArray.push(this.selectedDuty);
      this.selectedDuty = new Duty();
      console.log("valid")
    } else {
      return;
    }
    
  }

  deleteDuty(i:number):void {
    this.dutyArray.splice(i, 1);
  }




}
