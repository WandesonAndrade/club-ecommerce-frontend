import { FunctionComponent } from "react";
import Header from "./components/header/header.component";

interface AppProps {
  message?: string;
}

const App: FunctionComponent<AppProps> = ({ message }) => (
  <div>
    <Header />
  </div>
);
export default App;
