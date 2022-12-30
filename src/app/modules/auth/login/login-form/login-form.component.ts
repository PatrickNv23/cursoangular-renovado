import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@data/services/api/auth.service';
//import { CONST_LOGIN_PAGE } from '@data/constants';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  // public data = CONST_LOGIN_PAGE;
  // public loginForm;

  // constructor() {
  //   this.loginForm = this.data.FORM;
  // }

  // public isValidForm() {
  //   return (this.loginForm.email.isValid() && this.loginForm.password.isValid());
  // }

  public loginForm;
  public loginSubmitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      // person: this.formBuilder.group({
      //   name: ['', [Validators.required, Validators.maxLength(35)]],
      //   lastname: ['', [Validators.required, Validators.maxLength(35)]]
      // }),
      // interests: this.formBuilder.array([
      //   this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
      // ])
    });
  }
  ngOnInit(): void {
    this.loginForm.get("email").setValue("hola@email.com");
  }

  public authenticate() {
    this.loginSubmitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    console.log('Authenticate');
    this.authService.login(this.loginForm.value).subscribe(r => {
      console.log(r);
    })
  }

  get form() {
    return this.loginForm.controls;
  }

  get formPerson() {
    return this.loginForm.controls.person.controls;
  }

  get interests() {
    return this.loginForm.get('interests') as FormArray;
  }

  addInterest() {
    this.interests.push(this.formBuilder.control('', [Validators.required, Validators.minLength(10)]));
  }

  removeInterest(index: number) {
    this.interests.removeAt(index);
  }

}
