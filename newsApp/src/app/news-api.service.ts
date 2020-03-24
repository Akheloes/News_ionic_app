import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NEWS_API_KEY } from '../../src/assets/news_api_key.json';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  /**
   * @Todo: 
   * - Call a news api and get the news Json objects
   * - Extrac the title, Content and Subtitle from those objects
   * - Fill in the headline properties
   */
  public getNews(): Observable<any> {
    let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=' + NEWS_API_KEY;
    return this.http.get(url);
  }
}
