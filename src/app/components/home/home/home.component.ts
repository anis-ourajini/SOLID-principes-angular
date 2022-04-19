import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {USERS_SERVICE, UsersService} from "../../../core/interfaces";
import {User} from "../../../core/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  users: Array<User> = [];

  constructor(@Inject(USERS_SERVICE) private usersService: UsersService) {}

  ngOnInit(): void {
  }

  getAllUsers(){
      this.users =  this.usersService.getAll();
  }
}
