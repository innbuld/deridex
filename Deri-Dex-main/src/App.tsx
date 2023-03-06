/* eslint-disable react/jsx-no-duplicate-props */
import { Box } from "@mui/material";
// import UAuth from '@uauth/js';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Staking from "./Pages/Staking";
import Swap from "./Pages/Swap";


// const uauth = new UAuth({
//   clientID: "2930f030-eda8-40d8-a5b5-c2c93505e936",
//   redirectUri: "https://derio.vercel.app",
//   scope: "openid wallet email social:optional social:telegram:optional social:twitter:optional"
// })

const App: React.FC = () => {
  const renderMainPage = () => {
    return <BrowserRouter>
      <Box display="flex" height='100%'>
        <Routes>
          <Route>
            <Route path="/" element={<Landing />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/exchange" element={<Swap />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  }
  return renderMainPage()
};

export default App;


