import {User} from "../models";

export interface UsersService {
  getAll(): Array<User>;
}
