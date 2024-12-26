import { FunctionComponent } from "react";

interface AppProps {
  message?: string;
}

const App: FunctionComponent<AppProps> = ({ message }) => (
  <div>
    <h1>hell world</h1>
  </div>
);
export default App;
