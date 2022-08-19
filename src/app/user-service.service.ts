import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Setting } from './setting/setting';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  setting = new Setting();

  private usersUrl: string;
  
  constructor(private http: HttpClient) {
    this.usersUrl = this.setting.BASE_URL + '/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  
}
