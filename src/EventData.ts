export interface IEventData {
  eventTime: Date;
  eventSource: any;
}

export class EventData implements IEventData {
  eventTime: Date;
  eventSource: any;

  constructor(eventSource: any) {
    this.eventSource = eventSource;
    this.eventTime = new Date();
  }
}
