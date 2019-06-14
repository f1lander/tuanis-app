import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articlesList$: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.articlesList$ = this.apiService.articles();
  }

  _substringBody(body: any) {
    return body.substring(0, 200);
  }

  _getURL(images: any) {
    return images.length > 0 ? images[0].full : '';
  }
}
