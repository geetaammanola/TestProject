import { Component, OnInit } from '@angular/core';
import { VisitorDataService } from '../services/visitor-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsData: any;

  constructor(public api :VisitorDataService) { 
   
  }

  ngOnInit() {
    this.getLatestNews();
  }

  async getLatestNews(){
await this.api.getNewsData().subscribe(res => {
  console.log(res);
  this.newsData =res.articles;
  // this.newsData =res.results;
  console.log(this.newsData);
},err =>{
  console.log(err);
}
)
  }


}
