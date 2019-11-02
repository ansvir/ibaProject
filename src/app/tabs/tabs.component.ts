import {Component, OnInit, Injectable} from '@angular/core';
import {GetService} from '../services/get.service';
import {Subsystem} from '../data/Subsystem';
import {TerminalService} from '../services/terminal.service';


@Component({
  selector: 'app-tabs-component',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})

@Injectable()
export class TabsComponent implements OnInit {

  subsystems: Subsystem[];
  currentTabId;

  constructor(private getService: GetService, private terminalService: TerminalService) {}
  ngOnInit() {
    console.log('tab init');
    try {
      this.getService.getSubsystems().subscribe((data: []) => {
        this.subsystems=data;
        this.currentTabId='0';
        console.log('pered vyzovom setSubsystems iz ngoninit tabs');
        this.terminalService.setSubsystem(this.subsystems[this.currentTabId]);
      });
      console.log('posle getSubsystem v nginit tabs');
    } catch (exception) {
      console.log(exception);

    }
  }

  tabPressed(id) {
    this.currentTabId=id;
    this.terminalService.setSubsystem(this.subsystems[id]);
  }
}
