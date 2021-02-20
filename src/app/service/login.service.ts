import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LoginService implements HttpInterceptor{
    //private url = 'http://192.168.1.111:8081/api'

    constructor( private http: HttpClient){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cRequest = req.clone({
            withCredentials: true
        });
        return next.handle(cRequest);
    }

    login(user: string, pass: string){
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        let data = new HttpParams();

        data = data.set('username', user);
        data = data.set('password', pass);

        return this.http.post('http://localhost:8081/api/login/v1', data, {'headers':headers}).subscribe();
    }
}