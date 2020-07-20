import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../core/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // add authorization user id header with jwt token if available
        const currentUser = this.authService.user;
        if (currentUser) {
            const headers = request.headers
                .set('Content-Type', 'application/json')
                .set('Authorization', `${this.authService.user.token_type} ${this.authService.user.access_token}`);
            request = request.clone({ headers });
        }

        return next.handle(request).pipe(
            tap((evt) => {
                if (evt instanceof HttpResponse) {
                    // global/ generic handler will come hee
                }
            })
        );
    }
}
