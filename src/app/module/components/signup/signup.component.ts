import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({		
			email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]]
		});
  }

  onSaveForm() {
    if(this.signupForm.valid) {
      console.log("valid"),

      this.authService.signUp(this.signupForm.value.email, this.signupForm.value.password).then((result) => {

        this.router.navigateByUrl('module/add');
      })
    } else {
      console.log("invalid")
    }
  }

}
