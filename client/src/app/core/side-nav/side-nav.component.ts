import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faHeart,
  faUserAlt,
  faSignOutAlt,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/user-service.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  faHeart = faHeart;
  faUserAlt = faUserAlt;
  faSignOutAlt = faSignOutAlt;
  faPlus = faPlus;
  @Input()
  showing: boolean;
  @Output()
  closeEvent = new EventEmitter();
  constructor(public userProvider: UserService) {}

  ngOnInit(): void {}
  /* close side naw */
  close() {
    this.closeEvent.emit(false);
  }
}
