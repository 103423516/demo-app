import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-loading-skeleton/dist/skeleton.css";

import { store } from "./store/index";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
