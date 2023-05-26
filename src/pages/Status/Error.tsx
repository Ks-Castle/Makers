import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import navigation from "@/data/navigation.json";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(navigation.Home.path);
  }, [navigate]);
  return <></>;
};

export default Error;
