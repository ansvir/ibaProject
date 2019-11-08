import {Component, OnInit} from '@angular/core';
import {Subsystem} from '../data/Subsystem';
import {TerminalService} from '../services/terminal.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';




@Component({
  selector: 'app-tabs-component',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})

export class TabsComponent implements OnInit {

  subsystems: Subsystem[];
  currentTabId;

  constructor(private terminalService: TerminalService, private actr: ActivatedRoute) {
    try {
      this.terminalService.setCurrentResult('Connecting...');
      this.actr.data.subscribe((data: []) => {
        console.log('get in child1 finished');
        this.subsystems=data;
        console.log(data);
        this.currentTabId=0;
        this.terminalService.setSubsystem(this.subsystems[this.currentTabId]);
      });
    } catch (exception) {
      console.log(exception);
    }
  }

  ngOnInit() {
  }

  tabPressed(id) {
    this.currentTabId=id;
    this.terminalService.setSubsystem(this.subsystems[id]);
  }

}
