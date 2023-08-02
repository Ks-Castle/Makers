import { Routes, Route } from "react-router-dom";
import menu from "@/data/navigation/menu.json";
import main from "@/data/navigation/main.json";
import * as _ from "@/pages/index";

const Router = () => {
  return (
    <Routes>
      <Route path={main.Home.path} element={<_.Home />} />
      <Route path={menu.TierList.path} element={<_.TierList />} />
      <Route path={menu.TierMaking.path + "/:id"} element={<_.TierMaking />} />
      <Route path={menu.MapleCrystalCalculator.path} element={<_.Crystal />} />
      <Route path={menu.MapleEvents.path} element={<_.MapleEvents />} />
      <Route path={main.UploadTier_New.path} element={<_.UploadTier_New />} />
      <Route path="*" element={<_.Error />} />
    </Routes>
  );
};

export default Router;
