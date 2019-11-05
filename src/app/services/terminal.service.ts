import { Injectable } from '@angular/core';
import {Subsystem} from '../data/Subsystem';

@Injectable({
  providedIn: 'root'
})
export class TerminalService{

  subsystem: Subsystem;

  getSubsystem() {
    console.log('getSubsystem terminal service');
    return this.subsystem;
  }

  setSubsystem(subsystem: Subsystem) {
    console.log('setSubsystem terminal service');
    this.subsystem=subsystem;
  }


}
