import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {TerminalService} from './terminal.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Subsystem} from "../data/Subsystem";

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{

  constructor(private terminalService: TerminalService) { }

  resolve() {
    console.log('resolve');
    return this.terminalService.getSubsystems().pipe(map(value=>value));
  }
}
