import {UsersService} from "../interfaces";
import {User} from "../models";


export class UsersImplService implements UsersService{

  users : Array<User> = [{id: 1, name: 'anis', age: '19' }, {id: 2, name: 'ramzi', age: '32' }, {id: 3, name: 'omar', age: '60' }]

  constructor() { }

  getAll(): Array<User> {
    return this.users;
  }
}
