import FishingMan from "./FishingMan";
import FishingRod from "./FishingRod";
import { FishType } from "./FishType";

const fishingRod = new FishingRod();
const man = new FishingMan("loft");

man.fishingRod = fishingRod;
fishingRod.fishingEvent = (type: FishType) => man.update(type);

while (man.fishCount < 5) {
  man.fishing();
}
