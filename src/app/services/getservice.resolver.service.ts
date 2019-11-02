import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {GetService} from './get.service';

@Injectable({
  providedIn: 'root'
})
export class GetServiceResolver implements Resolve<any>{

  constructor(private getService: GetService) { }

  resolve() {
    return this.getService.getSubsystems();
  }
}
