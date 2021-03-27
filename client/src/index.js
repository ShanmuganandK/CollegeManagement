// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

// Components
import App from "./App";

// Redux
import store from "./redux/store";
const theme = createMuiTheme({
  palette: {
     primary: {
        main: "#ff8f00" // This is an orange looking color
               },
     secondary: {
        main: "#ffcc80" //Another orange-ish color
                }
           }
           //,
//fontFamily: font // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <Provider store={store}>

    <App />
    
  </Provider>
  
  ,
  rootElement
);
