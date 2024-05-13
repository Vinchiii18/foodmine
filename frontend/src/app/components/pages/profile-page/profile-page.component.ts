import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{

  returnUrl = '';
  user!:User
  registerForm!: FormGroup;

  constructor(
    private userService: UserService,
    fb: FormBuilder,
    private router: Router
    
  ){
    this.user = userService.currentUser;

    console.log('this.user-->', this.user);

    this.registerForm = fb.group({
      name: [this.user.name, [Validators.required]],
      email: [this.user.email, [Validators.required,Validators.email]],
      address: [this.user.address, [Validators.required]],
    });
   }

  ngOnInit(): void {
    
  }

  update(){
    console.log('this.registerForm-->', this.registerForm.value);
    console.log('this.USER-->', this.user.id);
    this.userService.update(this.registerForm.value, this.user.id).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
