import { TierListDTO } from "@/pages/Menu/00_Tier/DTO";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const tierListArrayState = atom<TierListDTO[]>({
  key: "tierListArrayState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
