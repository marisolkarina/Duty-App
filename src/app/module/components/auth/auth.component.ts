import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  consultaForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.consultaForm = this.fb.group({		
			email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
		});
  }


  onSaveForm() {
    if(this.consultaForm.valid) {
      console.log("valid")
      this.router.navigateByUrl('module/add');
    } else {
      console.log("invalid")
    }
  }

}
