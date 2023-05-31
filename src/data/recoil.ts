import { atom } from "recoil";
import { TierListDTO } from "./DTO";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const tierListArrayState = atom<TierListDTO[]>({
  key: "tierListArrayState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
