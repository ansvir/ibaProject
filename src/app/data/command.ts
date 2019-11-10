export class Command {

  id: number;
  subsystem_id: number;
  command: string;
  result: string;
  timestamp: string;

  private results=[
    {
      command: 'command',
      result: 'there should be results'
    },
    {
      command: '=xall',
      result: 'all windows are closed'
    },
    {
     command: '=x',
     result: 'current window is closed'
    },
    {
      command:'another-command',
      result:'there should be another results'
    },
    {
      command:'help',
      result:'available commands:\n\tcommand\n\tanother-command\n\t=xall\n\t=x'
    }
  ];

  constructor(subsystem_id?: number, command?: string) {
      if(!arguments.length) {}
      else {
        this.subsystem_id = subsystem_id;

        const date = new Date();
        this.timestamp =
          date.getDate() + '-'
          + date.getMonth() + '-'
          + date.getFullYear() + ' '
          + date.getHours() + ':'
          + date.getMinutes() + ':'
          + date.getSeconds();

        this.command=command;

        this.result='unknown command';
        for(const res of this.results) {
          if(res.command===this.command) {
            this.result=res.result;
            break;
          }
        }

        this.command='>'+command;
      }
  }
}
