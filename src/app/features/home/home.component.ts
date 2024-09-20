import { Component, inject, OnInit } from '@angular/core';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import Page from './components/tweet-card/interfaces/Page';
import Tweet from './components/tweet-card/interfaces/Tweet';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TweetCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private homeService = inject(HomeService);

  protected tweets: Tweet[] = []

  ngOnInit(): void {
      this.homeService.getTweets()
      .subscribe({
        next: res =>{
          for(let tweet of res.content){
            this.tweets.push(tweet);
          }
        },
        error: err =>{
          console.log(err);
        }
      })    
  }

}
