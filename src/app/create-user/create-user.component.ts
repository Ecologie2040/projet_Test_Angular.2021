import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUser } from '../shared/models/user/user';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  creationF: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    const createUser: CreateUser = {
      username: this.creationFG.username.value,
      prenom: this.creationFG.prenom.value,
      nom: this.creationFG.nom.value,
      password: this.creationFG.password.value,
      email: this.creationFG.email.value
    }

    this.authService.createUser(createUser)

  }
  get creationFG() {

    return this.creationF.controls
  }

  private initForm(): void {
    this.creationF = this.formBuilder.group({

      nom: ['', Validators.required],
      username: ['', Validators.required],
      prenom: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]


    })

  }
}
