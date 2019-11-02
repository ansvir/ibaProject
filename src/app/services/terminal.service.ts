import { Injectable } from '@angular/core';
import {Subsystem} from '../data/Subsystem';
import {Command} from '../data/Command';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  static CONNECTION_ERROR_MSG='Error while connecting to localhost:8080\n';
  subsystem: Subsystem;
  command: Command;
  currentResult: string;

  getSubsystem() {
    return this.subsystem;
  }

  setSubsystem(subsystem: Subsystem) {
    this.subsystem=subsystem;
  }

  getCommand() {
    return this.command;
  }

  setCommand(command: Command) {
    this.command=command;
  }

  getCurrentResult() {
    return this.currentResult;
  }

  setCurrentResult(result: string) {
    this.currentResult=result;
  }

  addCurrentResult(result: string) {
    this.currentResult+=result;
  }

  constructor() {
    this.currentResult='';
  }
}
