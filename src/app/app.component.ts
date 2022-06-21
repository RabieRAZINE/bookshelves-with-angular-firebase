import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var config =  {
      apiKey: "AIzaSyCEtpg9qpCoz5p9wTiUz2JnVtTu2H9NLts",
      authDomain: "bookshelves-angular-firebase.firebaseapp.com",
      projectId: "bookshelves-angular-firebase",
      storageBucket: "bookshelves-angular-firebase.appspot.com",
      messagingSenderId: "830231894073",
      appId: "1:830231894073:web:9017cfcfa616297074d5e8",
      measurementId: "G-C0RF7LQRKL"
    };
    firebase.initializeApp(config);
  }
}
