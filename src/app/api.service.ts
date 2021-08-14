import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  username: string;
  token: string;
  endPart: any = 'WUlWfnbHTiNHee4YjCuu';

  // ghp_IxON6SWJJgzwefwu
  // WUlWfnbHTiNHee4YjCuu

  constructor(
    private http: HttpClient
  ) { }


  getProfileInfo(name: string): Observable<any> {
    return this.http.get("https://api.github.com/users/" + name + '?access_token=' + 'ghp_IxON6SWJJgzwefwu' + this.endPart);
  }

  getUserRepos(name: string): Observable<any> {
    return this.http.get("https://api.github.com/users/" + name + '/repos?access_token=' + 'ghp_IxON6SWJJgzwefwu' + this.endPart);
  }

}
