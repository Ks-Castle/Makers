import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { KEY } from "./keys";
import { TierListDTO } from "@/pages/Menu_Tier/DTO/index";

const { persistAtom } = recoilPersist();

export const tierListArrayState = atom<TierListDTO[]>({
  key: KEY.TIER_ARRAY_STATE,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
