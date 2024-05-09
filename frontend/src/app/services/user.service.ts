import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());

  public userObservable:Observable<User> = this.userSubject.asObservable();

  constructor(
    private http:HttpClient,
    private toastrService:ToastrService
  ) { }

  login(userLogin: IUserLogin):Observable<User> {
    // Call the API to login
    // If successful, set the userSubject
    // If not successful, return an error message

    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.userSubject.next(user);
          this.toastrService.success(`Welcome to Foodmine ${user.name}!`, 'Login Successful');
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
    
  }
}
