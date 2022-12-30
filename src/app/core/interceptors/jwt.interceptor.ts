import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_ROUTES } from "@data/constants/routes";
import { AuthService } from "@data/services/api/auth.service";
import { Observable } from "rxjs";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {

  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = this.authService.getUser;
    const isAuthenticated = currentUser && currentUser.token;
    if (isAuthenticated || req.url !== API_ROUTES.AUTH.LOGIN) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }

    return next.handle(req);
  }

}