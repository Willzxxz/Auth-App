import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./theme";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Box>
            <Routes>
              <Route
                path="/*"
                element={
                  <>
                    <App />
                  </>
                }
              />
            </Routes>
          </Box>
        </ChakraProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
