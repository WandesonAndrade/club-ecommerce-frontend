import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//paginas
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/config/firebase.config";

interface AppProps {
  message?: string;
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  onAuthStateChanged(auth, (user) => console.log(user));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
