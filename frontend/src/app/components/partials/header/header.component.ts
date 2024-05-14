import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;
  cartQuantity=0;
  user!: User;
  order:Order = new Order();

  constructor(cartService:CartService,private userService:UserService, orderService: OrderService) {

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
      orderService.getOrderByUser(this.user.id).subscribe( {
        next: (order) => {  
          this.order = order;
        }, 
        error: (err) => {
          return;
        }
      })
    })

   }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }

  openMenu() {
    this.isMenuOpen = true;
  }

}
