import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(public injector: Injector) { }

    intercept(req: any, next: any) {
        var auth = this.injector.get(AuthService)
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + auth.token)
        })
        return next.handle(authRequest)
    }
}