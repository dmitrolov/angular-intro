import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  constructor() {

  }
  items = ['item1', 'item2', 'item3', 'item4'];
  logged = false;
  text = 'hello world';
  toggleLogin = () => {
    this.logged = !this.logged;
    console.log(event);
  }

  ngOnInit() {
  }

}
