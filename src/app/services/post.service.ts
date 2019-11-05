import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Command} from '../data/Command';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {}
  postCommand(command: Command) {
    return this.httpClient.post('http://localhost:8080', command).toPromise();
  }
}
