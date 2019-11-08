import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {TerminalService} from './terminal.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{

  constructor(private terminalService: TerminalService) { }

  resolve(){
    console.log('resolve');
    return this.terminalService.getSubsystems();
  }
}
