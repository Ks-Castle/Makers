import { Routes, Route } from "react-router-dom";
import navigation from "@/data/navigation.json";
import Error from "@/pages/Status/Error";
import Home from "@/pages/Home";
import TierList from "@/pages/TierList";
import TierMaking from "@/pages/TierMaking";
import StatMaking from "@/pages/StatMaking";
import Gallery from "@/pages/Gallery";

const Router = () => {
  return (
    <Routes>
      <Route path={navigation.Home.path} element={<Home />} />
      <Route path={navigation.TierList.path} element={<TierList />} />
      <Route path={navigation.TierGenerate.path} element={<TierMaking />} />
      <Route path={navigation.StatCardGenerate.path} element={<StatMaking />} />
      <Route path={navigation.Gallery.path} element={<Gallery />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
