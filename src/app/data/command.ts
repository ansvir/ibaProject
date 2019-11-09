export class Command {

  private id: number;
  private subsystem_id: number;
  private command: string;
  private result: string;
  private timestamp: string;

  constructor( subsystem_id: number, command: string) {
      const date = new Date();
      this.subsystem_id = subsystem_id;
      this.command = command;
      this.timestamp = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + ' '
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      this.result = '';
  }

  get getId(): number {
    return this.id;
  }

  set setId(value: number) {
    this.id = value;
  }

  get getSubsystemId(): number {
    return this.subsystem_id;
  }

  set setSubsystemId(value: number) {
    this.subsystem_id = value;
  }

  get getCommand(): string {
    return this.command;
  }

  set setCommand(value: string) {
    this.command = value;
  }

  get getResult(): string {
    return this.result;
  }

  set setResult(value: string) {
    this.result = value;
  }

  get getTimestamp(): string {
    return this.timestamp;
  }

  setTimestamp(value: string) {
    this.timestamp = value;
  }
}
