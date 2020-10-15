// export interface IEventHandler {}

import { IEventData } from "./IEventData";

export interface IEventHandler<TEventData extends IEventData> {
  handleEvent(eventData: TEventData): void;
}
