import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hmr-sample';
  counter = 1;

  ngOnInit() {
    console.log('hello init hook');
  }

  increment() {
    this.counter = this.counter + 1;
  }

  decrement() {
    this.counter = this.counter - 2;
  }
}
