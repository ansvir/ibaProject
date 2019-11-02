import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class GetService {

  constructor(private httpClient: HttpClient) {}

  getSubsystems() {
    console.log('getSubsystems v GetService');
    return this.httpClient.get('http://localhost:8080/subsystems');
  }

  getResultsBySubsystem(name: string) {
    return this.httpClient.get('http://localhost:8080/subsystems/'+name+'/result');
  }
}
