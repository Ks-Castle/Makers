import { Routes, Route } from "react-router-dom";
import navigation from "@/data/navigation.json";
import Error from "@/pages/Status/Error";
import Home from "@/pages/Home";
import TierList from "@/pages/Menu/Tier";
import TierMaking from "@/pages/Menu/Tier/TierMaking";
import Crystal from "@/pages/Menu/Crystal";
import Gallery from "@/pages/Gallery";
import UploadTier_New from "@/pages/Admin/UploadTier_New";

const Router = () => {
  return (
    <Routes>
      <Route path={navigation.Home.path} element={<Home />} />
      <Route path={navigation.TierList.path} element={<TierList />} />
      <Route
        path={navigation.TierGenerate.path + "/:id"}
        element={<TierMaking />}
      />
      <Route
        path={navigation.MapleCrystalCalculator.path}
        element={<Crystal />}
      />
      <Route path={navigation.Gallery.path} element={<Gallery />} />

      <Route
        path={navigation.UploadTier_New.path}
        element={<UploadTier_New />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
