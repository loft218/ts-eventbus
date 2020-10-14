// type FishingHandler = (type: FishType) => void;

import FishingEventData from "./FishingEventData";
import FishingMan from "./FishingMan";
import { FishType } from "./FishType";

interface FishingHandler {
  (eventData: FishingEventData): void;
}

export default class FishingRod {
  fishingEvent: FishingHandler;

  throwHook(man: FishingMan) {
    console.log("\n开始下钩！");

    if (Math.ceil(Math.random() * 10) % 2) {
      console.log("🐠咬钩了");

      let type: FishType = Math.floor(Math.random() * 5);

      if (this.fishingEvent) {
        this.fishingEvent(new FishingEventData("FishingRod", type, man));
      }
    } else {
      console.log("😑");
    }
  }
}
