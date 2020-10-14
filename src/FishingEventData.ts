import { EventData } from "./EventData";
import FishingMan from "./FishingMan";
import { FishType } from "./FishType";

export default class FishingEventData extends EventData {
  constructor(eventSource: any, fishType: FishType, fishingMan: FishingMan) {
    super(eventSource);
    this.fishType = fishType;
    this.fishingMan = fishingMan;
  }

  fishType: FishType;
  fishingMan: FishingMan;
}
