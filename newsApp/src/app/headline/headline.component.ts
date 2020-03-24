import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements OnInit {

  public headlines: Headline[] = [];

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.newsApiService.getNews().subscribe(news => {
      news.articles.forEach(element => {
        let headline: Headline = {
          title: element.title,
          content: element.content
        };
        this.headlines.push(headline);
      });
      this.headlines = this.headlines.slice(0, 2);
      console.log(this.headlines);
    });
  }

}

interface Headline {
  title? : string;
  content? : string;
}
