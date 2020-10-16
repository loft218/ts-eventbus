import FishingEventData from "./FishingEventData";
import FishingEventHandler from "./FishingEventHandler";
import FishingMan from "./FishingMan";
import FishingRod from "./FishingRod";

const fishingRod = new FishingRod();
const man = new FishingMan("loft");

man.fishingRod = fishingRod;
fishingRod.fishingEvent = (eventData: FishingEventData) => new FishingEventHandler().handleEvent(eventData);

while (man.fishCount < 5) {
  man.fishing();
}
