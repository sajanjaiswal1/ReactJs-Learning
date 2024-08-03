import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyRoutes from "./MyRoutes.jsx";
import "./App.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContextProvider } from "./components/layout/GlobalContext.jsx";
import { Provider } from "react-redux";
import myStore from "./components/redux/Store.jsx";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(myStore);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={myStore}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalContextProvider>
        <MyRoutes />
      </GlobalContextProvider>
    </PersistGate>
  </Provider>
  //</React.StrictMode>
);
