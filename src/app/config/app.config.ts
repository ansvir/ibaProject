import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subsystem} from '../data/subsystem';
import {map} from 'rxjs/operators';

@Injectable()
export class AppConfig {

  private subsystems: Subsystem[] = null;
  private subsystem: Subsystem = null;

  constructor(private http: HttpClient) {

  }

  public getSubsystem() {
    return this.subsystem;
  }

  public setSubsystem(subsystem: Subsystem) {
    this.subsystem=subsystem;
  }

  public getSubsystems() {
    return this.subsystems;
  }

  public setSubsystems(subsystems: Subsystem[]) {
    this.subsystems=subsystems;
  }

  load() {
    console.log('config loaded');
    return new Promise((resolve) => {
      this.http
        .get('http://localhost:8080/subsystems')
        .pipe(map(value=>value))
        .subscribe((data: Subsystem[]) => {
          this.subsystems = data;
          resolve(true);
        });
    });
  }
}
