import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
})
export class ScrollToTopComponent implements OnInit {
  faArrowUp = faArrowUp;
  constructor() {}

  ngOnInit(): void {}

  scroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
