import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { setupStore } from "./store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
