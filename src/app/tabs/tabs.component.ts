import {Component, OnInit} from '@angular/core';
import {TerminalService} from '../services/terminal.service';

@Component({
  selector: 'app-tabs-component',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})

export class TabsComponent implements OnInit {

  private currentTabId;

  constructor(private terminalService: TerminalService) {
  }

  ngOnInit() {
    this.currentTabId=0;
    this.terminalService.setSubsystem(this.terminalService.getSubsystems()[this.currentTabId]);
  }

  async tabPressed(id) {
    this.currentTabId=id;
    this.terminalService.setSubsystem(this.terminalService.getSubsystems()[this.currentTabId]);
    await this.terminalService.loadResultsToOutput();
  }

}
