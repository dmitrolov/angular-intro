import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>Angular routes</h1>
    <nav>
      <a routerLink="/">Main</a><br>
      <a routerLink="/contacts">Contacts</a><br>
      <a routerLink="/about">About</a><br>
      <a routerLink="/date">Date</a><br>
    </nav>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'Tour of Heroes';
}
