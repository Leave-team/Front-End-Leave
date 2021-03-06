import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NavbarService } from '../../services/navbar/navbar.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  private fomrTentatives: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.fomrTentatives)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login({
        email: this.form.value.userName,
        password: this.form.value.password
      });
    }
    this.fomrTentatives = true;
  }

}
