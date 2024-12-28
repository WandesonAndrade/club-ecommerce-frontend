import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//paginas
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";

interface AppProps {
  message?: string;
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
