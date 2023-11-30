import {Component, HostListener, OnDestroy } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, Subscription} from "rxjs";
import {BusyService} from "./_services/busy";

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const slideInOutAside = trigger('slideInOutAside', [
  state('in', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  state('out', style({
    transform: 'translateX(-100%)',
    opacity: 0
  })),
  transition('out => in', animate('300ms ease-in'))
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInOutAside]
})
export class AppComponent implements OnDestroy{
  currentPage = '/'; // Set your default/current page here

  showBlock: boolean = true;
  title: 'WeatherHub';
  toggleAside() {
    this.showBlock = !this.showBlock;
  }

  private routerSubscription: Subscription;
  breadcrumbs: { label: string; url: string; active: boolean }[] = [];
  isMenuOpen = false;

  constructor(private router: Router, private spinner: BusyService) {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentPage = event.url;

      // this.addDelayTOSpinner();
      this.checkScreenSize();
    });

  }

  addDelayTOSpinner(): void {
    this.spinner.busy();
    setTimeout(() => {
      this.spinner.idle();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= 1200) {
      this.showBlock = false;
    } else if (window.innerWidth > 1200) {
      this.showBlock = true;
    }
  }

}
