import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWolrdBean {
  constructor(public message: string) { }

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get('http://localhost:8090/hello-world-bean');

  }
  executeHelloWorldBeanServiceWithPathVariable(name: string) {
    return this.http.get<HelloWolrdBean>(`http://localhost:8090/hello-world/path-variable/'${name}'`);
  }

}
