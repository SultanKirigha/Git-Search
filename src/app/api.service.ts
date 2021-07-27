import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  username: string;
  endPart: any = 'k8zlaiUV10q93p';

  // ghp_khvgaNdReAHSRDG3vArT4j
  // k8zlaiUV10q93p

  constructor(
    private http: HttpClient
  ) { }


  getProfileInfo(name: string): Observable<any> {
    return this.http.get("https://api.github.com/users/" + name + '?access_token=' + 'ghp_khvgaNdReAHSRDG3vArT4j' + this.endPart);
  }

  getUserRepos(name: string): Observable<any> {
    return this.http.get("https://api.github.com/users/" + name + '/repos?access_token=' + 'ghp_khvgaNdReAHSRDG3vArT4j' + this.endPart);
  }

}
