import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  propertiesList$: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.propertiesList$ = this.apiService.properties();
  }

}
