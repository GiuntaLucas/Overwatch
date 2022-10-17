import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";

const userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('noob')));

function set(user: User) {
    if(user) {
        localStorage.setItem('noob', JSON.stringify(user));        
    }else{
        localStorage.removeItem('noob');    
    }
    userSubject.next(user);
}
const value: Observable<User> = userSubject.asObservable();

export const user = {
    set,
    value
}