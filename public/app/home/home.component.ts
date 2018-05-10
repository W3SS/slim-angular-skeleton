import { Component, OnInit } from '@angular/core';
import { MailerService } from '../services/mailer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mailer;

  constructor(mailer: MailerService) {
    this.mailer = mailer;
   }

  ngOnInit() {
    console.log('home-component-init!')
    console.log(this.mailer.getRecipients())
  }

}
