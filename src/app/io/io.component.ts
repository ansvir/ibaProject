import {Component, OnInit} from '@angular/core';
import {TerminalService} from '../services/terminal.service';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css'],
})

export class IoComponent implements OnInit{

  constructor(private terminalService: TerminalService) {}

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

  clearText() {
    this.terminalService.setCurrentResult('');
  }

  async deleteFromDatabase() {
    await this.terminalService.deleteResultsBySubsystemId();

  }
}
