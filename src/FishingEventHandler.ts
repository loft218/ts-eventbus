import FishingEventData from "./FishingEventData";
import { FishType } from "./FishType";
import { IEventHandler } from "./IEventHandler";

export default class FishingEventHandler implements IEventHandler<FishingEventData> {
  handleEvent(eventData: FishingEventData): void {
    eventData.fishingMan.fishCount += 1;
    const fishType = FishType[(<FishingEventData>eventData).fishType];
    console.log(
      `${eventData.fishingMan.name} 钓到一条*${fishType}*，总共已钓到 ${eventData.fishingMan.fishCount} 条鱼了！`
    );
  }
}
