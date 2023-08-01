import { Routes, Route } from "react-router-dom";
import menu from "@/data/navigation/menu.json";
import main from "@/data/navigation/main.json";
import Error from "@/pages/Status/Error";
import Home from "@/pages/Home";
import TierList from "@/pages/Menu/00_Tier";
import TierMaking from "@/pages/Menu/00_Tier/TierMaking";
import Crystal from "@/pages/Menu/01_Crystal";
import Gallery from "@/pages/Gallery";
import UploadTier_New from "@/pages/Admin/UploadTier_New";

const Router = () => {
  return (
    <Routes>
      <Route path={main.Home.path} element={<Home />} />
      <Route path={menu.TierList.path} element={<TierList />} />
      <Route path={menu.TierGenerate.path + "/:id"} element={<TierMaking />} />
      <Route path={menu.MapleCrystalCalculator.path} element={<Crystal />} />
      <Route path={menu.Gallery.path} element={<Gallery />} />
      <Route path={main.UploadTier_New.path} element={<UploadTier_New />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
