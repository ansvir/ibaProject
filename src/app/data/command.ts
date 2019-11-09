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
        this.command = command;
        this.timestamp = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + ' '
          + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        this.result = '';
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
