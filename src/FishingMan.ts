import { IEventData } from "./IEventData";
import FishingEventData from "./FishingEventData";
import FishingRod from "./FishingRod";
import { FishType } from "./FishType";
import { IEventHandler } from "./IEventHandler";

export default class FishingMan implements IEventHandler<IEventData> {
  constructor(name: string) {
    this.name = name;
  }

  name: string;

  fishCount: number = 0;

  fishingRod: FishingRod;

  fishing() {
    this.fishingRod.throwHook(this);
  }

  handleEvent(eventData: IEventData): void {
    if (eventData instanceof FishingEventData) {
      this.fishCount += 1;
      const fishType = FishType[(<FishingEventData>eventData).fishType];
      console.log(`${this.name} 钓到一条*${fishType}*，总共已钓到 ${this.fishCount} 条鱼了！`);
    } else {
      throw new Error("unknown event data");
    }
  }
}
