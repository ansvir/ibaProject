export class Command {

  private static idCounter=0;
  private id: number;
  private subsystemId: number;
  private command: string;
  private result: string;
  private timestamp: string;

  constructor(subsystemId, command) {
    const date = new Date();
    Command.idCounter++;
    this.id=Command.idCounter;
    this.subsystemId=subsystemId;
    this.command=command;
    this.timestamp=date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+' '
      +date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    this.result='';
  }

  getId(): number {
    return this.id;
  }

  serId(value: number) {
    this.id = value;
  }

  getSubsystemId(): number {
    return this.subsystemId;
  }

  setSubsystemId(value: number) {
    this.subsystemId = value;
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
