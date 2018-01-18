import { Noticia } from './noticia/noticia.interface';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NoticiasService {

  constructor(private http: Http) { }

  getNews() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=5ce7b2270dad4c49a6525808536fd7ab';
    return this.http.get(url)
      .map(res => {
        const resJson = res.json();

        return resJson.articles.map(unaNoticiaJson => {
          const noticia: Noticia = {
            title: unaNoticiaJson.title,
            date: unaNoticiaJson.publishedAt,
            description: unaNoticiaJson.description,
            author: unaNoticiaJson.author,
            image: unaNoticiaJson.urlToImage
          };

          return noticia;
        });

      });
  }

}
