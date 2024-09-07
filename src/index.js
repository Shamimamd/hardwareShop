import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import store from "./reduxtoolkitproject2/store";
// import { store } from "./redux/app/store";
// import { store } from "./redux/app/store";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import reportWebVitals from "./reportWebVitals";
// import ContextProvider from "./components/context/ContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    ,{/* </ContextProvider> */}
  </React.StrictMode>
);
// mundir 38322242
//Your unique reference number (URN) is 2yzhotmc14lrd and you have registered with the email address adshamim920@gmail.com. If you want to change or update your registration information, you can log back into your unique registration platform here.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
