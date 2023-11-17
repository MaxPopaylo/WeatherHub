import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, Subscription} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";
import {BusyService} from "./_services/busy";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  isSidebarHidden = true;

  currentPage = '/'; // Set your default/current page here

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  showBlock = false;

  private routerSubscription: Subscription;
  breadcrumbs: { label: string; url: string; active: boolean }[] = [];
  isMenuOpen = false;

  constructor(private router: Router, private spinner: BusyService) {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentPage = event.url;
      // this.ngOnInit()
    });
  }

  ngOnInit(): void {
    this.spinner.busy();
    setTimeout(() => {
      this.spinner.idle();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }



}
