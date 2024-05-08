import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./services/context/AuthProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PopupProvider } from "./services/context/PopupContext";
import { OrderProvider } from "./services/context/OrderContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <AuthProvider>
      <GoogleOAuthProvider clientId="754024932907-rmtcla5qls0ki3k6bccdvmkq5dlpfind.apps.googleusercontent.com">
        <PopupProvider>
          <OrderProvider>
            <Provider store={store}>
              <PersistGate persistor={persistor}>
                <App />
              </PersistGate>
            </Provider>
          </OrderProvider>
        </PopupProvider>
      </GoogleOAuthProvider>
    </AuthProvider>
  // </React.StrictMode>
);

reportWebVitals();
