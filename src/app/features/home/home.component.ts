import { Component } from '@angular/core';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TweetCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
