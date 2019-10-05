import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  apiKey = '7706396e73bf4cedaf95f16eecf1763b';

  constructor(private http: HttpClient) {}
  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&country=in&apiKey=' + this.apiKey
    );
  }
  initArticles() {
    return this.http.get('https://newsapi.org/v2/everything?q=development&apiKey=' + this.apiKey
    );
  }
  getArticlesByID(source: string) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.apiKey
    );
  }
}
