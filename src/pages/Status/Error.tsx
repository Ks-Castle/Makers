import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import main from "@/data/navigation/main.json";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(main.Home.path);
  }, [navigate]);
  return <></>;
};

export default Error;
