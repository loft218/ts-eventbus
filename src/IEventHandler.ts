// export interface IEventHandler {}

import { IEventData } from "./EventData";

export interface IEventHandler<TEventData extends IEventData> {
  handleEvent(eventData: TEventData): void;
}
