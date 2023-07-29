import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, Subscription} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  showBlock = false;

  title = 'Weather Info';
  currentPage: string = '';
  private routerSubscription: Subscription;
  breadcrumbs: { label: string; url: string; active: boolean }[] = [];
  isMenuOpen = false;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentPage = event.url;
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }



}
