import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-social-profile-list',
  templateUrl: './social-profile-list.component.html',
  styleUrls: ['./social-profile-list.component.css']
})
export class SocialProfileListComponent implements OnInit {
  socialProfiles: any = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService
      .profile()
      .then(data => {
        this.socialProfiles = data;
      })
      .catch(err => console.log(err));
  }

}
