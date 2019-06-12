import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
  profile: {};
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.profile().then(profile => {
      this.profile = profile;

      console.log(this.profile);
    })
    .catch(err => console.log(err));
  }
}
