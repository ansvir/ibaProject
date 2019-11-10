export class Command {

  private id: number;
  private subsystem_id: number;
  private command: string;
  private result: string;
  private timestamp: string;

  constructor( subsystem_id?: number, command?: string) {
      if(!arguments.length) {}
      else {
        const date = new Date();
        this.subsystem_id = subsystem_id;
        this.timestamp = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + ' '
          + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        this.result = '';
        switch (command) {
          case 'command' : {
            this.result='there should be results';
            break;
          }
          case '=xall' : {
            this.result='all windows are closed';
            break;
          }
          case '=x' : {
            this.result='current window is closed';
            break;
          }
          case 'another-command': {
            this.result='there should be another results';
            break;
          }
          case 'help' : {
            this.result='available commands:\ncommand\nanother-command\n=xall\n=x';
            break;
          }
          default :
            this.result='unknown command';
            break;
        }
        this.command='>'+command;
      }
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getSubsystemId(): number {
    return this.subsystem_id;
  }

  setSubsystemId(value: number) {
    this.subsystem_id = value;
  }

  getCommand(): string {
    return this.command;
  }

  setCommand(value: string) {
    this.command = value;
  }

  getResult(): string {
    return this.result;
  }

  setResult(value: string) {
    this.result = value;
  }

  getTimestamp(): string {
    return this.timestamp;
  }

  setTimestamp(value: string) {
    this.timestamp = value;
  }
}
