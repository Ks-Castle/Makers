import { TierListDTO } from "@/pages/Menu/00_Tier/DTO";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { KEY } from "./keys.js";

const { persistAtom } = recoilPersist();

export const tierListArrayState = atom<TierListDTO[]>({
  key: KEY.TIER_ARRAY_STATE,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
