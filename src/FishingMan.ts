import FishingRod from "./FishingRod";
import { FishType } from "./FishType";

export default class FishingMan {
  constructor(name: string) {
    this.name = name;
  }

  name: string;

  fishCount: number = 0;

  fishingRod: FishingRod;

  fishing() {
    this.fishingRod.throwHook();
  }

  update(type: FishType) {
    this.fishCount += 1;
    console.log(
      `${this.name} 钓到一条*${FishType[type]}*，总共已钓到 ${this.fishCount} 条鱼了！`
    );
  }
}
