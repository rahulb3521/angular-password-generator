import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length = 0;
  password = '';
  
  onButtonClick ()  {
    this.password = 'MY PASSWORD';
  }
  getPassword () {
    return this.password;
  }
}
