import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet';
import { Path } from '../models/path';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public server = 'http://localhost:3200/api/';
  private actionUrl: string;
  constructor(private http: HttpClient) { 
    this.actionUrl = this.server;
  }
  public findAll(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.actionUrl + 'planets');
  }
  
  public findDirection(distance: Path): Observable<any> {
    return this.http.post<any>(this.actionUrl + 'findroute',distance);
  }

}



@Injectable()
export class CustomInterceptor implements HttpInterceptor {

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return next.handle(req);
}
}
