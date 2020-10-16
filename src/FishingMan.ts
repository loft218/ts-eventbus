import FishingRod from "./FishingRod";

export default class FishingMan {
  constructor(name: string) {
    this.name = name;
  }

  name: string;

  fishCount: number = 0;

  fishingRod: FishingRod;

  fishing() {
    this.fishingRod.throwHook(this);
  }
}
