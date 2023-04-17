import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  public loader: boolean = false;
  ngOnInit(): void {
    this.show();
  }

  show() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }
}
