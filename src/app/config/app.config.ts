import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subsystem} from '../data/subsystem';
import {map} from 'rxjs/operators';
import {TerminalService} from '../services/terminal.service';

@Injectable()
export class AppConfig {

  constructor(private httpClient: HttpClient, private terminalService: TerminalService) {

  }

  load() {
    return new Promise((resolve) => {
      this.terminalService.getSubsystemsRequest()
        .pipe(map(value=>value))
        .subscribe((data: Subsystem[]) => {
          console.log(data);
          this.terminalService.setSubsystems(data);
          resolve(true);
        });
    });
  }
}
