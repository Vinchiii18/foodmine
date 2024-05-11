import { Cart } from 'src/app/shared/models/Cart';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // MY WORK, NOT FROM THE COURSE
  // cart!: Cart

  // constructor(private cartService: CartService) {
  //   this.cartService.getCartObservable().subscribe((cart) => {
  //     this.cart = cart;
  //   })
  // }

  // ngOnInit(): void {
  // }

  cartQuantity: number = 0;
  user!: User;

  constructor(cartService: CartService, private userService: UserService) { 
    cartService.getCartObservable().subscribe((newCart) => { 
      this.cartQuantity= newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
      // console.log('this.user-->:', this.user)
    })
  }

  ngOnInit(): void {
  
  }

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
