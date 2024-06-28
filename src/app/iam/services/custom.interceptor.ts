import { HttpInterceptorFn } from "@angular/common/http";

export const customInterceptor: HttpInterceptorFn = (request, next) => {
    debugger;

    const myToken = localStorage.getItem('token');

    const cloneRequest = request.clone({
        setHeaders: {
            Authorization: `Bearer ${myToken}`
        }
    });

    return next(cloneRequest);
}