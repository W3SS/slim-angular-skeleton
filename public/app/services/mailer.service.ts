import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor() { }

  sendMail() {

  }

  getRecipients() {
    return ['frank','mary','bill']
  }
}
