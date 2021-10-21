import "./App.css";
import Digimon from "./pages/main/digimon-main.page";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

function App() {
  return (
    <Provider store={Store}>
      <Digimon />
    </Provider>
  );
}

export default App;
