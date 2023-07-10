import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);
  
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const className = context.getClass().name;
    const methodName = context.getHandler().name;
    const request = context.switchToHttp().getRequest();
    const requestHeaders = request.headers ? JSON.stringify(request.headers) : '';
    const requestQueryParams = request.query ? JSON.stringify(request.query) : '';
    const requestBody = request.body ? JSON.stringify(request.body) : '';
    const emptyObject = {};

    this.logger.log(`Before... ${className}.${methodName} | Headers: ${requestHeaders} | Query Parameters: ${requestQueryParams} | Timestamp: ${now}`);

    return next.handle().pipe(
      tap(() => {
        this.logger.log(`After... ${className}.${methodName} | Request Body: ${requestBody} | Timestamp: ${now} | Duration: ${Date.now() - now}ms ${JSON}.stringify(requestHeaders)`);
      }),
    );
  }
}
