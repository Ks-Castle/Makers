import { useEffect, useState } from "react";
import { BrowserRouter as RouterWrap } from "react-router-dom";
import Router from "@/components/Routers/Router";
import GlobalStyle from "@/assets/styles/GlobalStyle";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/UI/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // 다크 모드 상태 관리

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", String(!darkMode)); // 다크 모드 상태를 localStorage에 저장
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDarkMode(theme === "true");
    }
  }, []);

  return (
    <RouterWrap>
      <GlobalStyle darkMode={darkMode} /> {/* darkMode prop 전달 */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />{" "}
      {/* darkMode와 toggleDarkMode prop 전달 */}
      <Router />
      <Analytics />
    </RouterWrap>
  );
};

export default App;
