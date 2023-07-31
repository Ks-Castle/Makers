import { atom } from "recoil";
import { TierListDTO } from "@/pages/Menu/Tier/DTO/index";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const tierListArrayState = atom<TierListDTO[]>({
  key: "tierListArrayState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
