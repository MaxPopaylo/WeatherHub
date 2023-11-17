import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable, delay, finalize, identity, filter, delayWhen} from 'rxjs';
import { BusyService } from '../_services/busy';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.busyService.busy();

    return next.handle(request).pipe(
      finalize(() => {
        this.busyService.idle();
      })
    );
  }

}
