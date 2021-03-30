import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { UserService } from 'src/app/user-service.service';
import {
  faHamburger,
  faUserPlus,
  faSignOutAlt,
  faSignInAlt,
  faWindowClose,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PostsService } from 'src/app/posts-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentRoute;
  faHamburger = faHamburger;
  faSignOutAlt = faSignOutAlt;
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt;
  faWindowClose = faWindowClose;
  faSearch = faSearch;
  showSearch = false;
  @ViewChild('myDiv') divView: ElementRef;

  @Input()
  sideNavShowing;
  @Output()
  showHideSideNav = new EventEmitter<boolean>();
  constructor(
    public provider: UserService,
    private router: Router,
    public postsProvider: PostsService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }

  toggleSideNav() {
    this.showHideSideNav.emit(!this.sideNavShowing);
  }

  toggleSearch() {
    if (this.showSearch && this.postsProvider.like) {
      this.postsProvider.like = '';
      this.postsProvider.page = 1;
      this.postsProvider.posts.length = 0;
      this.postsProvider.getPosts();
    }

    this.showSearch = !this.showSearch;
    if (this.showSearch) {
      let t = setTimeout(() => {
        this.divView.nativeElement.focus();

        clearTimeout(t);
      }, 50);
    }
  }

  search(e) {
    this.postsProvider.like = e.target.value;
    this.postsProvider.page = 1;
    this.postsProvider.posts.length = 0;
    this.postsProvider.getPosts();
  }
}
