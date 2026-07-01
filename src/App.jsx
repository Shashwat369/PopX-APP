import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import ProfileSettings from "./pages/Profile/ProfileSettings";
import MobileContainer from "./components/MobileContainer";

const App = () => {
  return (
    <MobileContainer>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile-settings" element={<ProfileSettings/>}/>
      </Routes>
    </MobileContainer>
  );
};

export default App;
