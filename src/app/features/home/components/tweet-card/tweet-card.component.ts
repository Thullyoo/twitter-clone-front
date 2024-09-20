import { Component, input } from '@angular/core';
import Tweet from './interfaces/Tweet';

@Component({
  selector: 'app-tweet-card',
  standalone: true,
  imports: [],
  templateUrl: './tweet-card.component.html',
  styleUrl: './tweet-card.component.scss'
})
export class TweetCardComponent {

  public tweet = input.required<Tweet>();

}
