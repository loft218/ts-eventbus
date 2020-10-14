// type FishingHandler = (type: FishType) => void;

import { FishType } from "./FishType";

interface FishingHandler {
  (type: FishType): void;
}

export default class FishingRod {
  fishingEvent: FishingHandler;

  throwHook() {
    console.log("\n开始下钩！");

    if (Math.ceil(Math.random() * 10) % 2) {
      let type: FishType = Math.floor(Math.random() * 5);
      console.log("🐠咬钩了");

      if (this.fishingEvent) {
        this.fishingEvent(type);
      }
    } else {
      console.log("😑");
    }
  }
}
