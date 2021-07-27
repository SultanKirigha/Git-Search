import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;
  repos: any[] = [];
  githubUserQuery: string = 'SultanMwangoyaKirigha';

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }


  getUser() {
    // console.log('githubUserQuery', this.githubUserQuery);
    this.apiService.getProfileInfo(this.githubUserQuery.split(" ").join("")).subscribe(profile => {
      this.profile = profile;
      console.log('profile', this.profile);
    });

    this.getRepos();

  }

  getRepos(): void {
    this.apiService.getUserRepos(this.githubUserQuery.split(" ").join("")).subscribe(results => {
      this.repos = results;
      console.log('repos', this.repos);
    });

  }

}
