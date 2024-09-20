import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import Tweet from '../../features/home/components/tweet-card/interfaces/Tweet';
import Page from '../../features/home/components/tweet-card/interfaces/Page';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url: string = "http://localhost:8080/tweet";

  private httpClient = inject(HttpClient);

  getTweets(){
    const token = localStorage.getItem('authToken');
    
    let httpOptions = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    
    return this.httpClient.get<Page<Tweet>>(this.url, {headers: httpOptions});
  }

 
    
  
}
