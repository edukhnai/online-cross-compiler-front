import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CompileExecuteScriptService {

  constructor(private httpClient: HttpClient) {
  }

  public post(url: string, script: string): Observable<any> {
    return this.httpClient.post(url, new CompileExecuteScriptRequest(script));
  }
}
