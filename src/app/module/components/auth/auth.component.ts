import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // credenciales = {
  //   email: null,
  //   password: null
  // }

  consultaForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,

    private authService: AuthService
  ) {  }

  ngOnInit(): void {
    this.consultaForm = this.fb.group({		
			email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]]
		});
  }


  onSaveForm() {
    if(this.consultaForm.valid) {
      // console.log("valid"),
      // console.log(this.consultaForm.value)
      // this.router.navigateByUrl('module/add');

      this.authService.signIn(this.consultaForm.value.email, this.consultaForm.value.password).then((result) => {
        // this.router.navigate(['/module/add']);
        this.router.navigateByUrl('module/add');
      })
    } else {
      console.log("invalid")
    }
  }

}
