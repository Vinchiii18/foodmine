import { Cart } from 'src/app/shared/models/Cart';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(cartService: CartService) { 
    cartService.getCartObservable().subscribe((newCart) => { 
      this.cartQuantity= newCart.totalCount;
    })
  }

  ngOnInit(): void {
    
  }

}
