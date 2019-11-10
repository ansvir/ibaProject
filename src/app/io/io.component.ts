import {Component, OnInit} from '@angular/core';
import {Command} from '../data/command';
import {TerminalService} from '../services/terminal.service';
import {AppConfig} from '../config/app.config';



@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css'],
})

export class IoComponent implements OnInit{

  constructor(private terminalService: TerminalService, private config: AppConfig) {}

  private inputCommand: string;

  async ngOnInit() {
    await this.terminalService.loadResultsToOutput();
  }

  async enterPressed() {
    if(this.inputCommand===undefined) {
      this.terminalService.addCurrentResult('Input empty\n');
    }
    else {
      await this.terminalService.postCommand(this.inputCommand);
      this.inputCommand = '';
    }
  }

  clearText(subsystem) {
    this.terminalService.setCurrentResult('');
  }

  async deleteFromDatabase() {
    await this.terminalService.deleteResultsBySubsystemId();

  }
}
