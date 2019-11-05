import {Injectable, OnInit} from '@angular/core';
import {Subsystem} from '../data/Subsystem';

@Injectable({
  providedIn: 'root'
})
export class TerminalService{

  subsystem: Subsystem;

  getSubsystem() {
    return this.subsystem;
  }

  setSubsystem(subsystem: Subsystem) {
    this.subsystem=subsystem;
  }

}
