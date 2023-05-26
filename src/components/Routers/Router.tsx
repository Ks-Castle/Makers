import { Routes, Route } from "react-router-dom";
import navigation from "@/data/navigation.json";
import Error from "@/pages/Status/Error";
import Home from "@/pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path={navigation.Home.path} element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
